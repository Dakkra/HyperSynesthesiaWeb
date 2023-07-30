import {PAGES, useSelectedPageStore} from "./hooks/SelectedPage.state";
import HomePage from "./pages/HomePage";
import DownloadsPage from "./pages/DownloadsPage";
import ScreenshotsPage from "./pages/ScreenshotsPage";
import LegalPage from "./pages/LegalPage";

export default function PageRender() {
    const currentPage = useSelectedPageStore(state => state.currentPage);

    switch (currentPage) {
        case PAGES.HOME_PAGE:
            return (<HomePage></HomePage>)
        case PAGES.DOWNLOADS_PAGE:
            return (<DownloadsPage></DownloadsPage>)
        case PAGES.SCREENSHOTS_PAGE:
            return (<ScreenshotsPage></ScreenshotsPage>)
        case PAGES.LEGAL_PAGE:
            return (<LegalPage></LegalPage>)
        default:
            return (<></>)
    }
}