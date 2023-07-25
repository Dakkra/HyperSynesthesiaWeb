import {Button, Card, Divider, TableBody, TableCell, TableContainer, TableRow, Typography} from "@mui/material";
import * as React from "react";

export default function DownloadsPage() {
    return (
        <>
            <Card>
                <Typography variant={"h4"}>Downloads</Typography>
                <Divider></Divider>
                <Typography variant={"h6"}>Latest Build Artifacts</Typography>
                <TableContainer>
                    <TableBody>
                        <TableRow>
                            <TableCell>APPLICATION</TableCell>
                            <TableCell> <Button disabled>Artifact</Button></TableCell>
                            <TableCell> <Button disabled>Source</Button></TableCell>
                            <TableCell> <Button disabled>Build History</Button></TableCell>
                            <TableCell>
                                <img
                                    alt={"HS-Application Status"}
                                    src={"https://github.com/Dakkra/HyperSynesthesia/actions/workflows/ci.yml/badge.svg?branch=none"}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>PLUGIN</TableCell>
                            <TableCell>
                                <Button
                                    href={"https://nightly.link/Dakkra/HyperSynesthesia/workflows/ci/main/hypersynesthesia-plugin.jar.zip"}
                                    target={"_blank"}>Artifact</Button>
                            </TableCell>
                            <TableCell>
                                <Button color={"secondary"} href={"https://github.com/Dakkra/HyperSynesthesia"}
                                        target={"_blank"}>Source</Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    href={"https://github.com/Dakkra/HyperSynesthesia/actions?query=branch%3Amain+is%3Asuccess"}
                                    target={"_blank"}>
                                    Build History</Button>
                            </TableCell>
                            <TableCell>
                                <img
                                    alt={"HS-Plugin Status"}
                                    src={"https://github.com/Dakkra/HyperSynesthesia/actions/workflows/ci.yml/badge.svg?branch=main"}/>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>WEB</TableCell>
                            <TableCell>
                                <Button
                                    href={"https://nightly.link/Dakkra/HyperSynesthesiaWeb/workflows/CI/main/hs-build.zip"}
                                    target={"_blank"}>Artifact</Button>
                            </TableCell>
                            <TableCell>
                                <Button color={"secondary"}
                                        href={"https://github.com/Dakkra/HyperSynesthesiaWeb"}
                                        target={"_blank"}>Source</Button>
                            </TableCell>
                            <TableCell>
                                <Button
                                    href={"https://github.com/Dakkra/HyperSynesthesiaWeb/actions?query=event%3Apush+is%3Asuccess+branch%3Amain"}
                                    target={"_blank"}>Build
                                    History</Button>
                            </TableCell>
                            <TableCell>
                                <img
                                    alt={"HS-Web Status"}
                                    src={"https://github.com/Dakkra/HyperSynesthesiaWeb/actions/workflows/CI.yml/badge.svg?branch=main"}/>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </TableContainer>
            </Card>
        </>
    )
}