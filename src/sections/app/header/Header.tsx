import React from "react";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Icon,
    IconButton,
} from "@mui/material";
import Navigation from "./Navigation";
import MenuIcon from "@mui/icons-material/Menu";

/**
 * Default navigation options
 */
const DEFAULT_NAV_STATE = true;
const DEFAULT_NAV_WIDTH = 300;

function Header() {
    const [navOpen, setNavOpen] = React.useState<boolean>(DEFAULT_NAV_STATE);

    const changeNavOpen = () => setNavOpen(!navOpen);

    return (
        <Box>
            <AppBar
                position="fixed"
                sx={
                    navOpen
                        ? {
                              width: {
                                  sm: `calc(100% - ${DEFAULT_NAV_WIDTH}px)`,
                              },
                              ml: { sm: `${DEFAULT_NAV_WIDTH}px` },
                              transition: "all 0.2s",
                          }
                        : null
                }
            >
                <Toolbar>
                    <IconButton onClick={changeNavOpen}>
                        <Icon>
                            <MenuIcon />
                        </Icon>
                    </IconButton>
                    <Typography variant="h5">App</Typography>
                </Toolbar>
            </AppBar>
            <Navigation navWidth={300} open={navOpen} onClose={changeNavOpen} />
        </Box>
    );
}

export default Header;
