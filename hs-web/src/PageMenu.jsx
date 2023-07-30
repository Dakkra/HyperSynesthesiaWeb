import {BrowserView, MobileView} from "react-device-detect";
import {PAGES, useSelectedPageStore} from "./hooks/SelectedPage.state";
import {Button, Dialog, Divider, Fab, List, ListItem} from "@mui/material";
import * as React from "react";
import {useState} from "react";
import {Navigation} from "@mui/icons-material";

export default function PageMenu() {
    const [setCurrentPage] = useSelectedPageStore(state => [state.setCurrentPage]);
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
            <BrowserView>
                <Divider/>
                <Button onClick={() => setCurrentPage(PAGES.HOME_PAGE)}>Home</Button>
                <Button onClick={() => setCurrentPage(PAGES.DOWNLOADS_PAGE)}>Downloads</Button>
                <Button onClick={() => setCurrentPage(PAGES.SCREENSHOTS_PAGE)}>Screenshots</Button>
                <Button onClick={() => setCurrentPage(PAGES.LEGAL_PAGE)}>Legal</Button>
            </BrowserView>
            <MobileView>
                <Fab color={"primary"} onClick={() => setDialogOpen(true)} sx={{bottom: 100, right: 8}}>
                    <Navigation></Navigation>
                </Fab>
                <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                    <List>
                        <ListItem><Button fullWidth
                                          onClick={() => {
                                              setCurrentPage(PAGES.HOME_PAGE);
                                              setDialogOpen(false);
                                          }}>Home</Button></ListItem>
                        <ListItem> <Button fullWidth
                                           onClick={() => {
                                               setCurrentPage(PAGES.DOWNLOADS_PAGE);
                                               setDialogOpen(false);
                                           }}>Downloads</Button></ListItem>
                        <ListItem><Button fullWidth
                                          onClick={() => {
                                              setCurrentPage(PAGES.SCREENSHOTS_PAGE);
                                              setDialogOpen(false);
                                          }}>Screenshots</Button></ListItem>
                        <ListItem><Button fullWidth
                                          onClick={() => {
                                              setCurrentPage(PAGES.LEGAL_PAGE);
                                              setDialogOpen(false);
                                          }}>Legal</Button></ListItem>
                    </List>
                </Dialog>
            </MobileView>
        </>
    )
}