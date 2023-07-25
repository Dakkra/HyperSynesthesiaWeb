import {Card, Divider, Link, Typography} from "@mui/material";
import * as React from "react";

export default function DownloadsPage() {
    return (
        <>
            <Card>
                <Typography variant={"h4"}>Downloads</Typography>
                <Divider></Divider>
                <Typography variant={"body"}>
                    Currently there are no downloads. To see progress on our upcoming builds visit the <Link
                    href={"https://github.com/Dakkra/HyperSynesthesia"}
                    target={"_blank"}>Github
                    Repository</Link>
                </Typography>
            </Card>
        </>
    )
}