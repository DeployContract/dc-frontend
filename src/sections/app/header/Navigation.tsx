import React, { ReactElement } from "react";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Icon,
    ListItemIcon,
    Hidden,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { NavigationItem } from "library";

const navList: Array<NavigationItem<ReactElement<typeof Icon>>> = [
    {
        icon: (
            <Icon>
                <DashboardIcon />
            </Icon>
        ),
        name: "Dashboard",
    },
    {
        name: "Contracts",
    },
    {
        name: "Accounts",
    },
    {
        name: "Wallet",
    },
];

const NavItems = (
    <List>
        {navList.map((item) => {
            return (
                <ListItem button>
                    {item.icon ? (
                        <ListItemIcon>{item.icon}</ListItemIcon>
                    ) : null}
                    <ListItemText>{item.name}</ListItemText>
                </ListItem>
            );
        })}
    </List>
);

interface NavProps {
    /**
     * Navigation open value
     */
    open: boolean;

    /**
     * Navigation open value on mobile view
     */
    mobileOpen: boolean;

    /**
     * Navigation width
     */
    navWidth: number;

    /**
     * OnClose
     * TODO: Is this option Useless
     */
    onClose: any;
}

function Navigation(props: NavProps) {
    return (
        <Box>
            {/* For Mobile view */}
            <Hidden mdUp>
                <Drawer
                    open={props.mobileOpen}
                    variant="temporary"
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: props.navWidth,
                        },
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    onClose={props.onClose}
                >
                    {NavItems}
                </Drawer>
            </Hidden>

            <Hidden smDown>
                <Drawer
                    open={props.open}
                    variant="persistent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: props.navWidth,
                        },
                    }}
                    onClose={props.onClose}
                >
                    {NavItems}
                </Drawer>
            </Hidden>
        </Box>
    );
}

export default Navigation;
