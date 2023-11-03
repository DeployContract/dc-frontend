import React from "react";
import { Box, Button, Container, Snackbar } from "@mui/material";
import Header from "./header/Header";
import Main from "./main/Main";
import Navigation from "./header/Navigation";
import useServiceWorker from "../../useServiceWorker";

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
    const { aUpdate, update, waitingWorker } = useServiceWorker();

    const changeNavOpen = () => setNavOpen(!navOpen);

    const updateAction = (
        <React.Fragment>
            <Button onClick={update}>Update</Button>
        </React.Fragment>
    );

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
                open={aUpdate}
                action={updateAction}
                message="New Update Is available !"
            />
        </Box>
    );
}

export default App;
