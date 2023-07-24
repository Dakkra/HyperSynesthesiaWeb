import * as React from 'react';
import {Box, Button, Card, Container, createTheme, CssBaseline, Link, ThemeProvider, Typography} from "@mui/material";
import {useState} from "react";

export const componentOverrides = {
    components: {
        MuiLink: {
            defaultProps: {
                underline: 'none',
            }
        },
        MuiCard: {
            defaultProps: {
                raised: true
            },
            styleOverrides: {
                root: {
                    borderRadius: "1cm",
                    marginTop: "1cm",
                    padding: "1cm"
                }
            }
        }
    }
}

export const lightThemeOptions = {
    ...componentOverrides,
    palette: {
        mode: 'light',
        primary: {
            main: '#8061ea',
        },
        secondary: {
            main: '#f50057',
        },
    },
};

export const darkThemeOptions = {
    ...componentOverrides,
    palette: {
        mode: 'dark',
        primary: {
            main: '#6bee63',
        },
        secondary: {
            main: '#f50057',
        },
    },
};

const darkTheme = createTheme(darkThemeOptions);
const lightTheme = createTheme(lightThemeOptions);

const local_storage_theme_key = "ls_theme";

export default function App() {

    const [isDark, setIsDark] = useState(localStorage.getItem(local_storage_theme_key));

    function toggleTheme() {
        const nVal = String(!JSON.parse(isDark))
        setIsDark(nVal);
        localStorage.setItem(local_storage_theme_key, nVal)
    }

    return (
        <ThemeProvider theme={JSON.parse(isDark) ? darkTheme : lightTheme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <CssBaseline/>
                <Container component="main" sx={{mb: 2}} maxWidth="md">
                    <Card>
                        <Typography variant="h4" gutterBottom>
                            <img alt={"HyperSynesthesia Logo"} style={{verticalAlign: "middle"}} src={"icon1024.png"}
                                 width={64}/> DEMO
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Application for creating videos in response to audio
                        </Typography>
                    </Card>
                    <Card>
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
                                Analyze frame data to generate FFT, oscilloscope, and other audio visualization data
                            </li>
                            <li>
                                Render using <Link href={"https://openjfx.io/"}
                                                   target={"_blank"}>JavaFX</Link> (chosen
                                for web views to allow CSS styling of
                                components)
                            </li>
                            <li>
                                Encode video using FFMPEG again
                            </li>
                        </ul>
                        <Typography variant="body1">
                            With these goals in mind, the project is using <Link
                            href={"https://avereon.com/product/xenon"} target={"_blank"}>Xenon</Link> as an
                            application framework to enable
                            quality of life features such as auto-updates, threading, UI workflows, and more.
                            <br/>
                        </Typography>
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
                </Container>
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[200]
                                : theme.palette.grey[800],
                    }}
                >
                    <Container maxWidth="sm">
                        <Box sx={{display: "flex", flexDirection: "row", gap: "0.5cm"}}>
                            <Typography variant="caption">
                                <Link href={"https://github.com/Dakkra/HyperSynesthesia/blob/main/LICENSE"}
                                      target={"_blank"}>HyperSynesthesia is under the GPL v3 License</Link>
                                <br/>
                                Copyright © Christopher Soderquist (<Link href={"https://dakkra.com"}
                                                                          target={"_blank"}>Dakkra</Link>)
                            </Typography>
                            <br/>
                            <Button aria-label={"toggle theme button"}
                                    size={"small"}
                                    onClick={() => toggleTheme()}>Switch
                                to {JSON.parse(isDark) ? "Light" : "Dark"}</Button>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
