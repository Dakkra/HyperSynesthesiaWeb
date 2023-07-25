import {Button, Card, Divider, Typography} from "@mui/material";
import * as React from "react";

export default function DownloadsPage() {
    return (
        <>
            <Card>
                <Typography variant={"h4"}>Downloads</Typography>
                <Divider></Divider>
                <Typography variant={"h6"}>Latest Build Artifacts</Typography>
                APPLICATION:
                <Button disabled>Artifact</Button>
                <Button color={"secondary"} disabled>Source</Button>
                <Button disabled>Build History</Button>
                <Divider></Divider>
                PLUGIN:
                <Button
                    href={"https://nightly.link/Dakkra/HyperSynesthesia/workflows/ci/main/hypersynesthesia-plugin.jar.zip"}
                    target={"_blank"}>Artifact</Button>
                <Button color={"secondary"} href={"https://github.com/Dakkra/HyperSynesthesia"}
                        target={"_blank"}>Source</Button>
                <Button href={"https://github.com/Dakkra/HyperSynesthesia/actions?query=branch%3Amain+is%3Asuccess"}
                        target={"_blank"}>
                    Build History</Button>
                <Divider></Divider>
                WEB:
                <Button
                    href={"https://nightly.link/Dakkra/HyperSynesthesiaWeb/workflows/CI/main/hs-build.zip"}
                    target={"_blank"}>Artifact</Button>
                <Button color={"secondary"} href={"https://github.com/Dakkra/HyperSynesthesiaWeb"}
                        target={"_blank"}>Source</Button>
                <Button
                    href={"https://github.com/Dakkra/HyperSynesthesiaWeb/actions?query=event%3Apush+is%3Asuccess+branch%3Amain"}
                    target={"_blank"}>Build
                    History</Button>
            </Card>
        </>
    )
}