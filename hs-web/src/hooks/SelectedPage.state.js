import {create} from "zustand";

export const PAGES = {
    HOME_PAGE: "Home",
    DOWNLOADS_PAGE: "Downloads",
    SCREENSHOTS_PAGE: "Screenshots",
    LEGAL_PAGE: "Legal"
}

export const useSelectedPageStore = create((set) => ({
    currentPage: PAGES.HOME_PAGE,
    setCurrentPage: (newPage) => set(({currentPage: newPage}))
}))