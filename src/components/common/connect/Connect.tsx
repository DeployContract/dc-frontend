import React, { useEffect } from "react";
import { Button, Grid } from "@mui/material";
import useConnect, { wallets } from "../../../library/src/hectorHook";

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

    useEffect(() => {
        connect();
        getWallet();
    }, []);

    const hideWallet = (walletAddress: string, len: number): string => {
        const str = cutString(walletAddress, walletAddress.length / len);

        return [str[0], "...", str[str.length - 1]].join("");
    };

    return (
        <div>
            {status.wallet ? (
                hideWallet(status.wallet, 6)
            ) : (
                <Button sx={{ color: "white" }} onClick={connect}>
                    Connect
                </Button>
            )}
        </div>
    );
}

export default Connect;
