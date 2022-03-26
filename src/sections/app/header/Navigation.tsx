import React, { ReactElement } from "react";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Icon,
    ListItemIcon,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { NavigationItem } from "library";

const navList: Array<NavigationItem> = [
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

export const navWidth: number = 340;

function Navigation() {
    return (
        <Box>
            <Drawer
                open
                variant="permanent"
                sx={{
                    display: { xs: "none", sm: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: navWidth,
                    },
                }}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
            >
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
            </Drawer>
        </Box>
    );
}

export default Navigation;
