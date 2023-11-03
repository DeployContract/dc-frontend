import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import Routers from "./routers";
import {
    createTheme,
    ThemeProvider,
    CssBaseline,
    useMediaQuery,
} from "@mui/material";
import { ThemeContext, defaultTheme, ThemeColor } from "./theme";
import { TonConnectUIProvider } from '@tonconnect/ui-react';

function Index() {
    const [colorMode, setColorMode] = React.useState<ThemeColor>(
        (localStorage.getItem("themeMode") as ThemeColor) || "system"
    );

    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const theme = React.useMemo(() => {
        localStorage.setItem("themeMode", colorMode);

        const mode =
            colorMode === "system"
                ? prefersDarkMode
                    ? "dark"
                    : "light"
                : colorMode;

        return createTheme(
            {
                palette: {
                    mode: mode,
                },
            },
            defaultTheme
        );
    }, [prefersDarkMode, colorMode]);

    return (
        <TonConnectUIProvider manifestUrl="%PUBLIC_URL%/tonconnect-manifest.json">
            <ThemeContext.Provider
                value={{ mode: colorMode, setMode: setColorMode }}
            >
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routers />
                </ThemeProvider>
            </ThemeContext.Provider>
        </TonConnectUIProvider>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
