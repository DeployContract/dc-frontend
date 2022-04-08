import React, { ReactElement } from "react";
import { NavigationItem } from "library";
import { Icon } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TokenIcon from "@mui/icons-material/Token";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import AppsIcon from "@mui/icons-material/Apps";
import HelpIcon from "@mui/icons-material/Help";
import InfoIcon from "@mui/icons-material/Info";

const navList: Array<NavigationItem<ReactElement<typeof Icon>>> = [
    {
        icon: <DashboardIcon />,
        name: "Dashboard",
        path: "/app",
    },
    {
        icon: <TokenIcon />,
        name: "Token",
        path: "/app/token",
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
