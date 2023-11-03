import React, { useEffect } from "react";
import { useConnect, wallets } from "@qhecuba/hector-react-hooks";
import { Box, Button, Grid, Menu, MenuItem, ListItemIcon } from "@mui/material";
import Network from "./Network";
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';

/**
 * @param str Target string
 * @param rep Repeat num
 * @returns result
 */
const cutString = (str: string, rep: number): Array<string> => {
    let result = [];
    let i = 0;

    while (i < str.length) {
        result.push(str.slice(i, i + rep));
        i += rep;
    }

    return result;
};

function Connect() {
    const wallet = useTonWallet();
    const [anchor, setAnchor] = React.useState<HTMLButtonElement | null>(null);

    const hideWallet = (walletAddress: string, len: number): string => {
        const str = cutString(walletAddress, walletAddress.length / len);

        return [str[0], "...", str[str.length - 1]].join("");
    };

    const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        anchor ? setAnchor(null) : setAnchor(event.currentTarget);
    };

    return (
        <Box>
            {wallet ? (
                <div>
                    <span>Connected wallet: {(wallet as any).name}</span>
                    <span>Device: {wallet?.device.appName}</span>
                </div>
            ) : (<TonConnectButton />)}
            <Menu anchorEl={anchor} onClose={toggleMenu} open={Boolean(anchor)}>
                <MenuItem>custom</MenuItem>
            </Menu>
        </Box>
    );
}

export default Connect;
