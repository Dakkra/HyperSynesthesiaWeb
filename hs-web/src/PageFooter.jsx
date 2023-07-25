import {Box, Button, Container, Link, Typography} from "@mui/material";
import * as React from "react";

export default function PageFooter(props) {
    return (
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
                            onClick={() => props.toggleTheme()}>Switch
                        to {JSON.parse(props.isDark) ? "Light" : "Dark"}</Button>
                </Box>
            </Container>
        </Box>
    )
}