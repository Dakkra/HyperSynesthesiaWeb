import {Button, Card, Divider, Link, Typography} from "@mui/material";
import * as React from "react";

export default function DownloadsPage() {
    return (
        <>
            <Card>
                <Typography variant={"h4"}>Downloads</Typography>
                <Divider></Divider>
                <Typography variant={"h6"}>Latest Build Artifacts</Typography>
                <Button disabled>Application</Button> -- NOT AVAILABLE
                <Divider></Divider>
                <Button disabled>Plugin (Mod)</Button>
                -- <Link href={"https://github.com/Dakkra/HyperSynesthesia/actions?query=branch%3Amain+is%3Asuccess"}>
                Build History</Link>
                <Divider></Divider>
                <Button
                    href={"https://nightly.link/Dakkra/HyperSynesthesiaWeb/workflows/CI/main/hs-build.zip"}>Website</Button>
                -- <Link
                href={"https://github.com/Dakkra/HyperSynesthesiaWeb/actions?query=event%3Apush+is%3Asuccess+branch%3Amain"}>Build
                History</Link>
            </Card>
        </>
    )
}