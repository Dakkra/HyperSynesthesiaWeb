import * as React from 'react';
import {useState} from 'react';
import {Box, Card, Container, createTheme, CssBaseline, GlobalStyles, ThemeProvider, Typography} from "@mui/material";
import PageFooter from "./PageFooter";
import PageRender from "./PageRender";
import PageMenu from "./PageMenu";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

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
            main: '#a26c40',
        },
        secondary: {
            main: '#7c56c2',
        },
    },
};

export const darkThemeOptions = {
    ...componentOverrides,
    palette: {
        mode: 'dark',
        primary: {
            main: '#c179f6',
        },
        secondary: {
            main: '#f58300',
        },
    },
};

const darkTheme = createTheme(darkThemeOptions);
const lightTheme = createTheme(lightThemeOptions);

const local_storage_theme_key = "ls_theme";

export default function App() {
    const queryClient = new QueryClient();
    const [isDark, setIsDark] = useState(localStorage.getItem(local_storage_theme_key));

    function toggleTheme() {
        const nVal = String(!JSON.parse(isDark))
        setIsDark(nVal);
        localStorage.setItem(local_storage_theme_key, nVal)
    }

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={JSON.parse(isDark) ? darkTheme : lightTheme}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                    }}
                >
                    <CssBaseline/>
                    <GlobalStyles styles={{
                        body: {
                            background: JSON.parse(isDark) ? "radial-gradient(circle, #d7964a 0%, #482466 75%)" : "radial-gradient(circle, #482466 0%, #d7964a 75%)"
                        }
                    }}></GlobalStyles>
                    <Container component="main" sx={{mb: 2}} maxWidth="md">
                        <Card>
                            <Typography variant="h4" gutterBottom>
                                <img alt={"HyperSynesthesia Logo"} style={{verticalAlign: "middle"}}
                                     src={"logo-hyper-synesthesia-final.svg"}
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
        </QueryClientProvider>
    );
}
