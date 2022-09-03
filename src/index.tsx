import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import App from "./pages/app/App";
import { Pwa, Intro } from "./pages/pages";
import "./index.css";

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

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
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
