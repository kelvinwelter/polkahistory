import {
    Routes,
    Route,
} from "react-router-dom";
import PolkadotSearch from "./screens/PolkadotSearch";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<PolkadotSearch />} />
            <Route path="/polkadot" element={<PolkadotSearch />} />
        </Routes>
    )
}