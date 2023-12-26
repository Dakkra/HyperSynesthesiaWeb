import {Card} from "@mui/material";
import * as React from "react";

export default function ScreenshotsPage() {
    return (
        <Card sx={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: 4}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YByR2u-lFKA?si=c5xIZhOCQb6LiL60"
                    title="YouTube video player" frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/UmcQK385Ooo?si=FkaOKb6jp-rUUE9Q"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </Card>
    )
}