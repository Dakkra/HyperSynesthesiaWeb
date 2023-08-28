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
                <Typography variant={"h4"} sx={{mt: 4}}>Technologies and Dependencies</Typography>
                <Divider></Divider>

                <Typography variant={"body1"}>HyperSynesthesia application and plugin use: </Typography>
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

                <Divider></Divider>
                <Typography variant={"body1"}>HyperSynesthesia website uses: </Typography>
                <ul>
                    <li><Typography variant={"body1"}><Link href={"https://reactjs.org/"}
                                                            target={"_blank"}>React</Link> as the frontend
                        framework</Typography></li>
                    <li><Typography variant={"body1"}><Link href={"https://reactrouter.com/en/main"}
                                                            target={"_blank"}>React Router</Link> as the client side
                        router</Typography></li>
                    <li><Typography variant={"body1"}><Link href={"https://github.com/aautio/react-modal-image"}
                                                            target={"_blank"}>React Modal Image</Link> for image display</Typography>
                    </li>
                    <li><Typography variant={"body1"}><Link href={"https://mui.com/"} target={"_blank"}>Material
                        UI</Link> as the UI library</Typography></li>
                    <li><Typography variant={"body1"}><Link href={"https://tanstack.com/query/latest"}
                                                            target={"_blank"}>Tanstack Query</Link> as the
                        networking/query library</Typography></li>
                    <li><Typography variant={"body1"}><Link href={"https://www.npmjs.com/package/react-device-detect"}
                                                            target={"_blank"}>React Device Detect</Link> to determine
                        between mobile and desktop</Typography></li>
                    <li><Typography variant={"body1"}><Link href={"https://github.com/pmndrs/zustand"}
                                                            target={"_blank"}>Zustand</Link> for shared state management</Typography>
                    </li>

                </ul>
            </Card>
        </>
    )
}