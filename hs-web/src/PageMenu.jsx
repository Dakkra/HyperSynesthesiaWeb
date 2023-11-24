import {BrowserView, MobileView} from "react-device-detect";
import {Button, Dialog, Divider, Fab, List, ListItem} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import * as React from "react";
import {useState} from "react";
import {Navigation} from "@mui/icons-material";

/**
 * Displays the menu for navigating between different pages.
 *
 * This component provides buttons for navigating to the home page, downloads page,
 * screenshots page, and legal page. It also provides a mobile-friendly menu for
 * navigating between pages.
 *
 * @returns {JSX.Element} The rendered menu component.
 */
export default function PageMenu() {
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <>
            <BrowserView>
                <Divider/>
                <Button component={RouterLink} to="/">Home</Button>
                <Button component={RouterLink} to="/downloads">Downloads</Button>
                <Button component={RouterLink} to="/screenshots">Screenshots</Button>
                <Button component={RouterLink} to="/legal">Legal</Button>
            </BrowserView>
            <MobileView>
                <Fab color={"primary"} onClick={() => setDialogOpen(true)} sx={{bottom: 100, right: 8}}>
                    <Navigation></Navigation>
                </Fab>
                <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                    <List>
                        <ListItem><Button component={RouterLink} to="/" fullWidth>Home</Button></ListItem>
                        <ListItem><Button component={RouterLink} to="/downloads" fullWidth>Downloads</Button></ListItem>
                        <ListItem><Button component={RouterLink} to="/screenshots"
                                          fullWidth>Screenshots</Button></ListItem>
                        <ListItem><Button component={RouterLink} to="/legal" fullWidth>Legal</Button></ListItem>
                    </List>
                </Dialog>
            </MobileView>
        </>
    )
}