import { Routes, Route } from 'react-router-dom';
import PolkadotSearch from './screens/PolkadotSearch';
import KusamaSearch from './screens/KusamaSearch';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<PolkadotSearch />} />
      <Route path="/polkadot" element={<PolkadotSearch />} />
      <Route path="/kusama" element={<KusamaSearch />} />
    </Routes>
  );
}
