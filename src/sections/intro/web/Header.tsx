import React, { ReactElement } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HelpIcon from "@mui/icons-material/Help";
import DirectionsIcon from "@mui/icons-material/Directions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InfoIcon from "@mui/icons-material/Info";
import {
    Avatar,
    AppBar,
    Box,
    Button,
    Container,
    Icon,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Menu,
    MenuItem,
    SwipeableDrawer,
    Tooltip,
    Typography,
    Toolbar,
} from "@mui/material";
import { NavigationItem } from "library";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

type Anchor = "top" | "left" | "bottom" | "right";
const selectedAnchor: Anchor = "top";

const navList: Array<NavigationItem<ReactElement<typeof Icon>>> = [
    {
        icon: <DashboardIcon />,
        name: "Get start",
        onClick: () => {
            alert("ZZZ");
            // window.history.pushState({}, "", "/app");
            // window.history.replaceState({}, "", "/app");
        },
    },
    {
        icon: <SchoolIcon />,
        name: "Tutorials",
    },
    {
        icon: <LocalOfferIcon />,
        name: "Pricing",
    },
    {
        icon: <HelpIcon />,
        name: "FAQ",
    },
    {
        icon: <DirectionsIcon />,
        name: "Road map",
    },
    {
        icon: <ShoppingCartIcon />,
        name: "Custom",
    },
    {
        icon: <InfoIcon />,
        name: "About us",
    },
];

function Header() {
    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <NavDrawer />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                    >
                        Cotoch
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        Cotoch
                    </Typography>
                    <NavListStable />
                    <UserProfile />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

const NavListStable = () => (
    <Box
        sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
        }}
    >
        {navList.map((item) => (
            <Button
                key={item.name}
                // onClick={item.onClick()}
                sx={{ my: 2, color: "white", display: "block" }}
            >
                {item.name}
            </Button>
        ))}
    </Box>
);

const NavDrawer = () => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {navList.map((item) => (
                    <ListItem button>
                        {item.icon ? (
                            <ListItemIcon>{item.icon}</ListItemIcon>
                        ) : null}
                        <ListItemText>{item.name}</ListItemText>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key={selectedAnchor}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={toggleDrawer("top", true)}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                    anchor={selectedAnchor}
                    open={state[selectedAnchor]}
                    onClose={toggleDrawer(selectedAnchor, false)}
                    onOpen={toggleDrawer(selectedAnchor, true)}
                    variant="temporary"
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {list(selectedAnchor)}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    );
};

const UserProfile = () => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                    />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default Header;
