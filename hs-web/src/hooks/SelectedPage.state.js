import {create} from "zustand";

export const PAGES = {
    HOME_PAGE: "Home",
    DOWNLOADS_PAGE: "Downloads",
    SCREENSHOTS_PAGE: "Screenshots",
    LEGAL_PAGE: "Legal"
}

/**
 * Represents a store for managing the selected page in an application.
 *
 * @typedef {Object} UseSelectedPageStore
 * @property {string} currentPage - The currently selected page.
 * @property {function} setCurrentPage - A function to set the new selected page.
 */
export const useSelectedPageStore = create((set) => ({
    currentPage: PAGES.HOME_PAGE,
    setCurrentPage: (newPage) => set({currentPage: newPage})
}))