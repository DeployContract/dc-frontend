import React from "react";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Icon,
    IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Connect from "../../common/connect/Connect";

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
                    <IconButton onClick={props.menuOpenOnClick}>
                        <Icon>
                            <MenuIcon />
                        </Icon>
                    </IconButton>
                    <Typography sx={{ flexGrow: 1 }} variant="h5">
                        App
                    </Typography>
                    <Connect />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
