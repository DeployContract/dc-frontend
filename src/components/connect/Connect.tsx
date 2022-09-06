import React, { useEffect } from "react";
import { useConnect, wallets } from "@qhecuba/hector-react-hooks";
import { Box, Button, Grid, Menu, MenuItem, ListItemIcon } from "@mui/material";
import Network from "./Network";

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
    const [status, connect, getWallet] = useConnect(wallets.metamask());
    const [anchor, setAnchor] = React.useState<HTMLButtonElement | null>(null);

    useEffect(() => {
        connect();
        getWallet();
    }, []);

    const hideWallet = (walletAddress: string, len: number): string => {
        const str = cutString(walletAddress, walletAddress.length / len);

        return [str[0], "...", str[str.length - 1]].join("");
    };

    const toggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        anchor ? setAnchor(null) : setAnchor(event.currentTarget);
    };

    return (
        <Box>
            {status.wallet ? (
                <Button sx={{ color: "white" }} onClick={toggleMenu}>
                    <Grid container direction="column">
                        <Grid item>{hideWallet(status.wallet, 7)}</Grid>
                        <Grid item>
                            <Network />
                        </Grid>
                    </Grid>
                </Button>
            ) : (
                <Button sx={{ color: "white" }} onClick={connect}>
                    Connect
                </Button>
            )}

            <Menu anchorEl={anchor} onClose={toggleMenu} open={Boolean(anchor)}>
                <MenuItem>custom</MenuItem>
            </Menu>
        </Box>
    );
}

export default Connect;
