import React from "react";
import { NavigationItem } from "library";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TokenIcon from "@mui/icons-material/Token";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";

const navList: Array<NavigationItem<React.ReactElement>> = [
    {
        icon: <DashboardIcon />,
        name: "Dashboard",
        path: "/app",
    },
    {
        icon: <TokenIcon />,
        name: "Token",
        path: "/app/token/generator",
    },
    {
        icon: <HelpIcon />,
        name: "FAQ",
        path: "/app/faq",
    },
    {
        icon: <InfoIcon />,
        name: "Info",
        path: "/app/info",
    },
];

export { navList };
