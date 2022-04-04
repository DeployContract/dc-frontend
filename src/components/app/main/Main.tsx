import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Info from "./Info";
import Contracts from "./Contracts";

function Main() {
    return (
        <Routes>
            <Route path="info" element={<Info />} />
            <Route path="contracts" element={<Contracts />} />
        </Routes>
    );
}

export default Main;
