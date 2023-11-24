import React from 'react';

import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import DownloadsPage from "./pages/DownloadsPage";
import ScreenshotsPage from "./pages/ScreenshotsPage";
import LegalPage from "./pages/LegalPage";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage></HomePage>}/>
            <Route path="/downloads" element={<DownloadsPage></DownloadsPage>}/>
            <Route path="/screenshots" element={<ScreenshotsPage></ScreenshotsPage>}/>
            <Route path="/legal" element={<LegalPage></LegalPage>}/>
        </Routes>
    );
}

export default MainRoutes;