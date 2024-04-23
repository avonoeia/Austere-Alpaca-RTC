import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, yellow } from "@mui/material/colors";
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
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);
