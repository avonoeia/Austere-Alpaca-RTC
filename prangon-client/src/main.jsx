import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red, teal, yellow } from "@mui/material/colors";
// import { teal } from '@mui/material/colors';
import "./index.css";

// Imported fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Imported routes
import Root, { loader as rootLoader } from "./routes/Root";
import ErrorPage from "./errorPage";
import Home from "./pages/Home/Home";
import Search from "./routes/Search/Search";
import AppIndex from "./routes/AppIndex/AppIndex";
import Post from "./routes/Post/Post";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/app",
        element: <Root />,
        errorElement: <ErrorPage />,
        loader: rootLoader,
        children: [
            { index: true, element: <AppIndex /> },
            {
                path: "post",
                element: <Post />,
            },
            {
                path: "search",
                element: <Search />,
            },
            {
                path: "profile",
                element: <div>Profile</div>,
            },
        ],
    },
]);

const theme = createTheme({
    palette: {
        primary: {
            // main: "#79ffb7",
            main: "#101010",
        },
        secondary: {
            main: "#ebffea",
        },
        shade: {
            main: "1e1e1e",
        },
        error: {
            main: yellow[500],
        },
        warning: {
            main: red[500],
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
