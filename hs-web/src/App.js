import * as React from 'react';
import {useState} from 'react';
import {Box, Card, Container, createTheme, CssBaseline, ThemeProvider, Typography} from "@mui/material";
import PageFooter from "./PageFooter";
import PageRender from "./PageRender";
import PageMenu from "./PageMenu";

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
        },
        MuiFab: {
            styleOverrides: {
                root: {
                    position: "fixed"
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
                                 width={64}/> HyperSynesthesia
                        </Typography>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Application for creating videos in response to audio
                        </Typography>
                        <PageMenu></PageMenu>
                    </Card>
                    <PageRender></PageRender>
                </Container>
                <PageFooter isDark={isDark} toggleTheme={toggleTheme}></PageFooter>
            </Box>
        </ThemeProvider>
    );
}
