import React from "react";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Info from "./Info";

function Main() {
    return (
        <Routes>
            <Route path="info" element={<Info />} />
        </Routes>
    );
}

export default Main;
