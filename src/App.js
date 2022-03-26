import { useEffect, useState} from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { formatBalance } from '@polkadot/util';
import { Button, Flex, Center, Text, Stack, Heading } from '@chakra-ui/react';

import Header from './components/Header';

function App() {
  const [api, setApi] = useState(null);

  const searchByDate = async () => {
    // Retrieve the current block header
    const lastHdr = await api.rpc.chain.getHeader();
    
    // This binary search is not guaranteed to find the exact timestamp.
    // So we use a margin of error of 10 seconds.
    const errorMargin = 1000*60;

    const targetDateTimestamp = new Date(2021, 12, 31).getTime();

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
    const { nonce, data: balance } = await targetDecoratedApi.query.system.account('12ENWcCZ6PsMPMULpYNhoevt2cVQypcR7sBEujzQJovJVdg8');
    const chainDecimals = targetDecoratedApi.registry.chainDecimals[0];
    console.log('raw balance:', balance.free.toNumber())
    formatBalance.setDefaults({ unit: 'DOT' });
    const defaults = formatBalance.getDefaults();
    const free = formatBalance(balance.free, { withSiFull: true }, chainDecimals);
    const reserved = formatBalance(balance.reserved, { withSiFull: true }, chainDecimals);
    console.log('Formatted balance:', `{"free": "${free}", "unit": "${defaults.unit}", "reserved": "${reserved}", "nonce": "${nonce.toHuman()}"}`);
  }

  useEffect(() => {
    const constructApiInstance = async () => {
      const wsProvider = new WsProvider('wss://rpc.polkadot.io');
      const newApi = await ApiPromise.create({ provider: wsProvider });
      setApi(newApi);
    }

    constructApiInstance();
  }, []);

  return (
    <Flex as="main" direction="column">
      <Header />
      <Center flexGrow={1} paddingX={2}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Know your account balance{' '}
          <Text as={'span'} color="#E6007A">
            on any date
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Find out how many DOTs you had on the last day of last year to file your income tax. 
          Find out how many DOTs you had at any given date and time.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button colorScheme="pink" onClick={searchByDate}>Search</Button>
        </Stack>
      </Stack>
      </Center>
    </Flex>
  );
}

export default App;
