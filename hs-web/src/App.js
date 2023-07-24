import * as React from 'react';
import {Box, Container, CssBaseline, Typography} from "@mui/material";

export default function App() {
  return (
        <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
        >
          <CssBaseline />
          <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
              HyperSynesthesia
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              {'Xenon plugin / application for creating videos in response to audio'}
            </Typography>
            <Typography variant="body1">More information is coming soon.</Typography>
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
              <Typography variant="body1">
                Copyright © Christopher Soderquist (Dakkra)
              </Typography>
            </Container>
          </Box>
        </Box>
  );
}
