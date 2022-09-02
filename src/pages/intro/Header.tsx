import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HelpIcon from "@mui/icons-material/Help";
import DirectionsIcon from "@mui/icons-material/Directions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    SwipeableDrawer,
    Stack,
    Typography,
    Toolbar,
} from "@mui/material";
import { NavigationItem } from "library";
import Connect from "../../components/connect/Connect";

const navList: Array<NavigationItem<React.ReactElement>> = [
    {
        icon: <DashboardIcon />,
        name: "Get start",
        path: "/app",
    },
    {
        icon: <SchoolIcon />,
        name: "Tutorials",
        path: "#Tutorials",
    },
    {
        icon: <LocalOfferIcon />,
        name: "Pricing",
        path: "#Pricing",
    },
    {
        icon: <ShoppingCartIcon />,
        name: "Custom",
        path: "#CustomContract",
    },
    {
        icon: <HelpIcon />,
        name: "FAQ",
        path: "#FAQ",
    },
    {
        icon: <DirectionsIcon />,
        name: "Road map",
        path: "#Roadmap",
    },
];

function Header() {
    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar style={{ padding: 0 }}>
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <NavDrawer />
                    </Box>
                    <SiteName />
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <NavListStable />
                    </Box>
                    <Box style={{ marginInlineStart: "auto" }}>
                        <Connect />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

const SiteName = () => (
    <Typography variant="h5" noWrap component="h1" sx={{ mr: 2 }}>
        DeContract
    </Typography>
);

const NavListStable = () => (
    <Stack direction="row">
        {navList.map((item) => (
            <a href={item.path || "/notfound"}>
                <Button
                    key={item.name}
                    sx={{ my: 2, color: "white", display: "block" }}
                >
                    {item.name}
                </Button>
            </a>
        ))}
    </Stack>
);

const NavDrawer = () => {
    const [drawerState, setState] = React.useState(false);

    const toggleDrawer =
        (state: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setState(state);
        };

    const list = () => (
        <List>
            {navList.map((item) => (
                <a href={item.path || "/notfound"}>
                    <ListItem button>
                        {item.icon ? (
                            <ListItemIcon>{item.icon}</ListItemIcon>
                        ) : null}
                        <ListItemText>{item.name}</ListItemText>
                    </ListItem>
                </a>
            ))}
        </List>
    );

    return (
        <React.Fragment key={"top"}>
            <IconButton
                size="large"
                onClick={toggleDrawer(true)}
                color="inherit"
            >
                <MenuIcon sx={{ fontSize: 26 }} />
            </IconButton>
            <SwipeableDrawer
                anchor={"top"}
                open={drawerState}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                variant="temporary"
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <Box
                    sx={{
                        width: "auto",
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    {list()}
                </Box>
            </SwipeableDrawer>
        </React.Fragment>
    );
};

export default Header;
