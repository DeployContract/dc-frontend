import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import ThemeContext from "./theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Intro, Pwa } from "./pages/pages";
import App from "./pages/app/App";

const isPwaIntroPagePassed = (): boolean => {
    return localStorage.getItem("pwaIntroPagePassed") === "true";
};

//Test mode in local host
const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === "[::1]" ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

function Routers() {
    const [colorMode, setColorMode] = React.useState<"dark" | "light">("light");
    const theme = createTheme({
        palette: {
            mode: colorMode,
        }
    });

    return (
        <ThemeContext.Provider value={{ mode: colorMode, setMode: setColorMode }}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Intro />} />
                        <Route
                            path="/pwa"
                            element={
                                isPwaIntroPagePassed() && !isLocalhost ? (
                                    <Navigate replace to="/app" />
                                ) : (
                                    <Pwa />
                                )
                            }
                        />
                        <Route path="/app/*" element={<App />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}

export default Routers;