import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Player from "../pages/Player";
import Clan from "../pages/Clan";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/player/:tag" element={<Player />} />
                <Route path="/clan/:tag" element={<Clan />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}