import {Card, Divider, Link, Typography} from "@mui/material";

export default function LegalPage() {
    return (
        <>
            <Card>
                <Typography variant={"h4"}>Legal</Typography>
                <Divider></Divider>

                <Typography variant={"body1"}>Website Copyright &copy; Christopher Soderquist</Typography>
                <Typography variant={"body1"}>HyperSynesthesia is under GPLv3 License</Typography>
                <Typography variant={"body1"}>Logo design by ZephyrasLied</Typography>
                <Typography variant={"h4"}>Technologies and Dependencies</Typography>
                <Divider></Divider>
                <Typography variant={"body1"}>HyperSynesthesia uses: </Typography>
                <ul>
                    <li><Typography variant={"body1"}><Link href={"https://adoptium.net/"}
                                                            target={"_blank"}>Java</Link> as the runtime
                        environment</Typography></li>
                    <li><Typography variant={"body1"}><Link href={"https://openjfx.io/"}
                                                            target={"_blank"}>JavaFX</Link> for
                        UI and rendering</Typography></li>
                    <li><Typography variant={"body1"}><Link href={"https://github.com/kokorin/Jaffree"}
                                                            target={"_blank"}>Jaffree</Link> (<Link
                        href={"https://ffmpeg.org/"} target={"_blank"}>FFMPEG</Link> wrapper for Java) for decoding and
                        encoding media</Typography></li>
                    <li><Typography variant={"body1"}><Link href={"https://avereon.com/product/xenon"}
                                                            target={"_blank"}>Xenon</Link> as the
                        application
                        framework</Typography></li>
                </ul>
            </Card>
        </>
    )
}