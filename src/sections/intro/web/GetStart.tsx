import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./GetStart.css";
import logo from "../../../logo.svg";

export function GetStart() {
    return (
        <Box className="GetStart">
            <img src={logo} className="AppLogo" alt="logo" />
            <Box className="content">
                <Typography
                    variant="h4"
                    noWrap
                    component="h1"
                    sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                    Deploy Contract on Chain
                </Typography>
                <Typography
                    variant="h5"
                    noWrap
                    component="h1"
                    sx={{
                        flexGrow: 1,
                        display: { xs: "flex", md: "none" },
                    }}
                >
                    Deploy Contract on Chain
                </Typography>
                <Typography variant="subtitle1" component="div">
                    Create your contract, deploy on blockchain.
                </Typography>
                <Typography variant="subtitle1" component="div">
                    ERC20, BEP20 Token Generator.
                </Typography>
                <Button variant="contained" size="large">
                    Get Start
                </Button>
                <Typography variant="subtitle1" component="div">
                    <span>or </span>
                    <a href="#">Learn More!</a>
                </Typography>
            </Box>
        </Box>
    );
}
