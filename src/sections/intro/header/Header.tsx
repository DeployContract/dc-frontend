import React, { ReactElement } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Icon,
    ListItemIcon,
} from "@mui/material";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

type Anchor = "top" | "left" | "bottom" | "right";
const selectedAnchor: Anchor = "top";

interface IntroNavigationItem {
    /**
     * Icon of item
     */
    icon?: ReactElement<typeof Icon>;

    /**
     * Name that will displayed
     */
    name: string;

    /**
     * TODO
     */
    onClick?: Function;
}

const navList: Array<IntroNavigationItem> = [
    {
        icon: (
            <Icon>
                <DashboardIcon />
            </Icon>
        ),
        name: "Get Start",
    },
    {
        name: "Token",
    },
    {
        name: "Mint",
    },
    {
        name: "Burn",
    },
];

export const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                    >
                        Contract To Chain Deployer
                    </Typography>

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
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        Contract To Chain
                    </Typography>
                    <NavListStable />
                    <UserProfile />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

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
                // onClick={item.onClick}
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
