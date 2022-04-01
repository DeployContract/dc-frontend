import React, { ReactElement } from "react";
import { NavigationItem } from "library";
import { Icon } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InfoIcon from "@mui/icons-material/Info";

const navList: Array<NavigationItem<ReactElement<typeof Icon>>> = [
    {
        icon: (
            <Icon>
                <DashboardIcon />
            </Icon>
        ),
        name: "Dashboard",
        path: "/app",
    },
    {
        icon: (
            <Icon>
                <InfoIcon />
            </Icon>
        ),
        name: "Info",
        path: "/app/info",
    },
];

export { navList };
