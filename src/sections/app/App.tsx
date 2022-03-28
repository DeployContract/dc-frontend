import React from "react";
import { Box } from "@mui/material";
import Header from "./header/Header";
import Main from "./main/Main";

function App() {
    return (
        <Box sx={{ display: "flex" }}>
            <Header />
            <Main />
        </Box>
    );
}

export default App;
