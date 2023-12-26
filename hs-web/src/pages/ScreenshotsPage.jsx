import {Card, Typography} from "@mui/material";
import * as React from "react";

export default function ScreenshotsPage() {
    return (
        <Card>
            <Typography variant={"h4"}>Screenshots</Typography>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YByR2u-lFKA?si=c5xIZhOCQb6LiL60"
                    title="YouTube video player" frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </Card>
    )
}