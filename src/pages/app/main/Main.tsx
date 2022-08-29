import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Token from "./token/Token";
import Info from "./Info";
import Faq from "./Faq";

function Main() {
    return (
        <Routes>
            <Route index element={<Dashboard />} />
            <Route path="token/*" element={<Token />} />
            <Route path="faq" element={<Faq />} />
            <Route path="info" element={<Info />} />
        </Routes>
    );
}

export default Main;
