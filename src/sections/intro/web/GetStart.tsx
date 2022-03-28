import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./GetStart.css";
import logo from "../../../assets/svg/logo.svg";

export function GetStart() {
    return (
        <Box className="GetStart">
            <img src={logo} className="AppLogo" alt="logo" />
            <Box className="content">
                <Typography
                    variant="h3"
                    component="h1"
                    sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                >
                    Deploy Contract to Chain
                </Typography>
                <Typography
                    variant="h5"
                    component="h1"
                    sx={{
                        flexGrow: 1,
                        display: { xs: "flex", md: "none" },
                    }}
                >
                    Deploy Contract to Chain
                </Typography>
                <Typography variant="subtitle1" component="div">
                    Create contract, deploy on blockchain.
                </Typography>
                <Typography variant="subtitle1" component="div">
                    ERC20, BEP20 Token Generator.
                </Typography>
                <Button variant="contained" size="large">
                    Get Started
                </Button>
                <Typography variant="subtitle1" component="div">
                    <span>or </span>
                    <a href="#">Learn More!</a>
                </Typography>
            </Box>
        </Box>
    );
}
