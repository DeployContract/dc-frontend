import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { navWidth } from "./Navigation";

function Header() {
    return (
        <Box>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${navWidth}px)` },
                    ml: { sm: `${navWidth}px` },
                }}
            >
                <Toolbar>
                    <Typography variant="h5">App</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
