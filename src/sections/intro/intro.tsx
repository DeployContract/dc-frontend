import React from "react";
import logo from "./../../logo.svg";
import { AppBar, Box, Toolbar, Icon } from "@mui/material";

function Intro() {
    return (
        <Box>
            <AppBar>
                <Toolbar>
                    <Icon sx={{ fontSize: 50 }}>
                        <img src={logo} alt="LOGO" />
                    </Icon>
                    <h3>Contract to Chain Deployer</h3>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Intro;
