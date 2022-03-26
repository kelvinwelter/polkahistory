import { useEffect, useState} from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { 
  Flex, 
  Center, 
  Text, 
  Stack, 
  Heading, 
  CircularProgress, 
} from '@chakra-ui/react';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchWrapper from './components/SearchWrapper';
import BalanceWrapper from './components/BalanceWrapper';
import { searchByDate } from './utils/blockchainBinarySearch';
import { validateAddress } from './utils/validateAddress';

function App() {
  const [invalidAddress, setInvalidAddress] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(false);
  const [balance, setBalance] = useState(null);
  const [mode, setMode] = useState('search');
  const [address, setAddress] = useState('');
  const [api, setApi] = useState(null);

  const handleSearch = () => {
    if (validateAddress(address)) {
      setInvalidAddress(false);
      searchByDate({ 
        address,
        api,
        dateTime,
        setBalance,
        setIsLoading,
        setMode
      });
    } else {
      return setInvalidAddress(true);
    }
  }

  const modeMap = {
    search: 
      <SearchWrapper 
        address={address} 
        setAddress={setAddress} 
        dateTime={dateTime} 
        setDateTime={setDateTime} 
        handleSearch={handleSearch}
        invalidAddress={invalidAddress}
        isLoading={isLoading}
      />,
    showBalance: <BalanceWrapper balance={balance} dateTime={dateTime} setMode={setMode} />
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
          {api ? 
            modeMap[mode]
            : 
            <Stack spacing={2} direction={'row'}>
              <CircularProgress size={'20px'} isIndeterminate color="#E6007A" />
              <Text>Connecting to Polkadot...</Text>
            </Stack>
            }
        </Stack>
      </Center>
      <Footer />
    </Flex>
  );
}

export default App;
