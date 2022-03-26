import { useEffect, useState} from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';

function App() {
  const [api, setApi] = useState(null);

  useEffect(() => {
    const constructApiInstance = async () => {
      const wsProvider = new WsProvider('wss://rpc.polkadot.io');
      const newApi = await ApiPromise.create({ provider: wsProvider });
      setApi(newApi);
    }

    constructApiInstance();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
