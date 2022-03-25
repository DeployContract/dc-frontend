import { ReactElement } from "react";
import { Icon } from "@mui/material";
export interface NavigationItem {
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
