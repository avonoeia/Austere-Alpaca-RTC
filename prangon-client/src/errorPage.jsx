import * as React from "react";
import { useRouteError } from "react-router-dom";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink }  from "react-router-dom";


export default function ErrorPage() {
    const error = useRouteError();
    return (
        <main>
            <CssBaseline />
            <Box
                sx={{
                    mx: "auto",
                    my: 4,
                    py: 3,
                    px: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                    textAlign: "center",
                    borderRadius: 'sm',
                    backgroundColor: "secondary.main",
                }}
                variant="plain"
            >
                <Typography variant="h1">Oops!</Typography>
                <Typography variant="h6" component="h2">
                    Looks like something went wrong!
                </Typography>
                <Typography variant="body-sm">
                    Error: <i>{error.statusText || error.message}</i>
                </Typography>
                <RouterLink to="/app"><Button size="md">Back to home</Button></RouterLink>
            </Box> 
        </main>
    );
}