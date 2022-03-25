import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import App from "./sections/app/App";
import { Intro } from "./sections/intro/web/Intro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PwaIntro } from "./sections/intro/pwa/Intro";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Intro />} />
                    <Route path="PWA" element={<PwaIntro />} />
                </Route>
                <Route path="app" element={<App />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
