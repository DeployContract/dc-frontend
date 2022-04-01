import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Web from "./web/Web";
import Pwa from "./pwa/Pwa";

const isPwaIntroPassed = (): boolean => {
    return localStorage.getItem("pwaIntroPassed") === "true";
};

function Intro() {
    return (
        <Routes>
            <Route index element={<Web />} />
            <Route
                path="PWA"
                element={
                    isPwaIntroPassed() ? (
                        <Navigate replace to="/app" />
                    ) : (
                        <Pwa />
                    )
                }
            />
        </Routes>
    );
}

export default Intro;
