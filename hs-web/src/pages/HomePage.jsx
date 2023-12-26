import {Card, Divider, Link, Typography} from "@mui/material";
import * as React from "react";

export default function HomePage() {
    return (
        <>
            <Card>
                <Typography variant={"h4"}>About</Typography>
                <Divider></Divider>
                <Typography variant="body1">
                    HyperSynesthesia is an <Link href={"https://github.com/Dakkra/HyperSynesthesia"}
                                                 target={"_blank"}>open source
                    application</Link> created to be the spiritual successor to <Link
                    href={"https://soniccandle.sourceforge.net/"} target={"_blank"}>Sonic Candle</Link>.
                    <br/>
                    The goal is to:
                </Typography>
                <ul>
                    <li> Allow a user to use any audio input file (via <Link href={"https://ffmpeg.org/"}
                                                                             target={"_blank"}>FFMPEG</Link>)
                    </li>
                    <li>
                        Generate frame data from audio input
                    </li>
                    <li>
                        Analyze frame data to generate loudness, FFT, oscilloscope, and other audio visualization data
                    </li>
                    <li>
                        Render using Java Swing
                    </li>
                    <li>
                        Encode video using FFMPEG again
                    </li>
                </ul>
            </Card>
            <Card>
                If you wish to join or watch the progress on this project feel free to:
                <ul>
                    <li>
                        Join the <Link href={"https://discord.gg/MANggMn2aR"} target={"_blank"}>Discord</Link>
                    </li>
                    <li>
                        Contribute to the <Link href={"https://github.com/Dakkra/HyperSynesthesia"}
                                                target={"_blank"}>project</Link> by making a pull request
                    </li>
                </ul>
            </Card>
        </>
    )
}