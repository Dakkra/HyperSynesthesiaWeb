import {Card, Typography} from "@mui/material";
import * as React from "react";

export default function ScreenshotsPage() {
    return (
        <Card>
            <Typography variant={"h4"}>Screenshots</Typography>
            <img alt={"HyperSynesthesia About Screen"} style={{verticalAlign: "middle"}} src={"about_screen.png"}
                 width={"100%"}/>
            <img alt={"HyperSynesthesia Editor Screen"} style={{verticalAlign: "middle"}} src={"editor_screen.png"}
                 width={"100%"}/>
        </Card>
    )
}