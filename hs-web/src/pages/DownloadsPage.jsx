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
                    </TableBody>
                </TableContainer>
            </Card>
        </>
    )
}