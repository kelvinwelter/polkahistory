import { formatBalance } from '@polkadot/util';

export async function searchByDate({ address, dateTime, api, setIsLoading, setBalance }) {
    setIsLoading(true);
    setBalance(null);

    // Retrieve the current block header
    const lastHdr = await api.rpc.chain.getHeader();

    // This binary search is not guaranteed to find the exact timestamp.
    // So we use a margin of error of 10 seconds.
    const errorMargin = 1000*60;

    const targetDateTimestamp = dateTime.getTime();

    let lowerBlockNumber = 0;
    let upperBlockNumber = Number(lastHdr.number);
    let targetDecoratedApi = null;

    while (lowerBlockNumber <= upperBlockNumber) {
        let middleBlockNumber = Math.floor((lowerBlockNumber + upperBlockNumber) / 2);
        console.log(middleBlockNumber);
        const middleBlockHash = await api.rpc.chain.getBlockHash(middleBlockNumber);
        const middleBlockTimestamp = await api.query.timestamp.now.at(middleBlockHash);

        if (Math.abs(targetDateTimestamp - middleBlockTimestamp) < errorMargin) {
        targetDecoratedApi = await api.at(middleBlockHash);
        break;
        } else if (middleBlockTimestamp < targetDateTimestamp) {
        lowerBlockNumber = middleBlockNumber + 1;
        } else {
        upperBlockNumber = middleBlockNumber - 1;
        }
    }

    // Retrieve the last timestamp
    const now = await targetDecoratedApi.query.timestamp.now();
    console.log(String(now));

    // Retrieve the account balance & nonce via the system module
    const { nonce, data: balance } = await targetDecoratedApi.query.system.account(address);
    const chainDecimals = targetDecoratedApi.registry.chainDecimals[0];
    formatBalance.setDefaults({ unit: 'DOT' });
    const defaults = formatBalance.getDefaults();
    const free = formatBalance(balance.free, { withSiFull: true }, chainDecimals);
    const reserved = formatBalance(balance.reserved, { withSiFull: true }, chainDecimals);
    console.log('Formatted balance:', `{"free": "${free}", "unit": "${defaults.unit}", "reserved": "${reserved}", "nonce": "${nonce.toHuman()}"}`);

    setBalance({ unit: defaults.unit, free, reserved });
    setIsLoading(false);
}