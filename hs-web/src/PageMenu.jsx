import {BrowserView, MobileView} from "react-device-detect";
import {Button, Dialog, Divider, Fab, List, ListItem} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import * as React from "react";
import {useState} from "react";
import {Navigation} from "@mui/icons-material";

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