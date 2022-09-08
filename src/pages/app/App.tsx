import React from "react";
import { Box, Container, Snackbar } from "@mui/material";
import Header from "./header/Header";
import Main from "./main/Main";
import Navigation from "./header/Navigation";

/**
 * Default navigation options
 */
const DEFAULT_NAV_OPEN_STATE = true;
const DEFAULT_NAV_WIDTH = 250;

const responsiveWidth = {
    width: {
        sm: `calc(100% - ${DEFAULT_NAV_WIDTH}px)`,
    },
    ml: { sm: `${DEFAULT_NAV_WIDTH}px` },
};

const responsiveWidthStyle = {
    width: {
        sm: responsiveWidth.width.sm,
    },
    ml: {
        sm: responsiveWidth.ml.sm,
    },
    transition: "all 0.2s",
};

function App() {
    const [navOpen, setNavOpen] = React.useState<boolean>(
        DEFAULT_NAV_OPEN_STATE
    );

    const [updateAvailable, setUpdateAvailable] =
        React.useState<boolean>(false);

    const changeNavOpen = () => setNavOpen(!navOpen);

    React.useEffect(() => {
        navigator.serviceWorker.getRegistration().then((registeration) => {
            registeration?.addEventListener("updatefound", () => {
                setUpdateAvailable(true);
            });
        });
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                bgcolor: "background.default",
                color: "text.primary",
            }}
        >
            <Header
                styles={navOpen ? responsiveWidthStyle : null}
                menuOpenOnClick={changeNavOpen}
            />
            <Navigation
                navWidth={DEFAULT_NAV_WIDTH}
                open={navOpen}
                mobileOpen={!navOpen}
                onClose={changeNavOpen}
                onOpen={changeNavOpen}
            />
            <Container
                sx={navOpen ? responsiveWidthStyle : null}
                style={{
                    marginTop: "90px",
                }}
            >
                <Main />
            </Container>
            <Snackbar
                open={updateAvailable}
                message="New Update Is available please Reopen app to update."
            />
        </Box>
    );
}

export default App;
