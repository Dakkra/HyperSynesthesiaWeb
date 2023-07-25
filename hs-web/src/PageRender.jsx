import {PAGES, useSelectedPageStore} from "./hooks/SelectedPage.state";
import HomePage from "./pages/HomePage";
import DownloadsPage from "./pages/DownloadsPage";
import ScreenshotsPage from "./pages/ScreenshotsPage";

export default function PageRender() {
    const currentPage = useSelectedPageStore(state => state.currentPage);

    switch (currentPage) {
        case PAGES.HOME_PAGE:
            return (<HomePage></HomePage>)
        case PAGES.DOWNLOADS_PAGE:
            return (<DownloadsPage></DownloadsPage>)
        case PAGES.SCREENSHOTS_PAGE:
            return (<ScreenshotsPage></ScreenshotsPage>)
        default:
            return (<></>)
    }
}