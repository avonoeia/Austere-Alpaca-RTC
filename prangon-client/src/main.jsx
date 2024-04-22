import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
// import { teal } from '@mui/material/colors';
import "./index.css";

// Imported fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Imported routes
import Root from "./routes/Root";
import ErrorPage from "./errorPage";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,

    },
    {
        path: "/app",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "search",
                element: <div>Search</div>,
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
            main: teal[900],
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
