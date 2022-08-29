import React from "react";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Connect from "../../../components/connect/Connect";

interface HeaderProps {
    /**
     * Styles for sx prop
     */
    styles: object | null;

    /**
     * Function when clicked On menuIcon
     */
    menuOpenOnClick: any;
}

function Header(props: HeaderProps) {
    return (
        <Box>
            <AppBar position="fixed" sx={props.styles}>
                <Toolbar>
                    <IconButton
                        size="large"
                        onClick={props.menuOpenOnClick}
                        color="inherit"
                    >
                        <MenuIcon sx={{ fontSize: 26 }} />
                    </IconButton>
                    <Typography
                        variant="h5"
                        noWrap
                        component="h1"
                        sx={{ flexGrow: 1 }}
                    >
                        DeContract
                    </Typography>
                    <Connect />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
