import React from "react";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Icon,
    IconButton,
    Button,
} from "@mui/material";
import Navigation from "./Navigation";
import MenuIcon from "@mui/icons-material/Menu";

/**
 * Default navigation options
 */
const DEFAULT_NAV_OPEN_STATE = true;
const DEFAULT_NAV_WIDTH = 250;

function Header() {
    const [navOpen, setNavOpen] = React.useState<boolean>(
        DEFAULT_NAV_OPEN_STATE
    );

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
                    <Typography sx={{ flexGrow: 1 }} variant="h5">
                        App
                    </Typography>
                    <Button variant="text" sx={{ color: "white" }}>
                        Connect
                    </Button>
                </Toolbar>
            </AppBar>
            <Navigation
                navWidth={DEFAULT_NAV_WIDTH}
                open={navOpen}
                mobileOpen={!navOpen}
                onClose={changeNavOpen}
                onOpen={changeNavOpen}
            />
        </Box>
    );
}

export default Header;
