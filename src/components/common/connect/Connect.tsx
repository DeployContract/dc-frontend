import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useConnect, wallets } from "@qhecuba/hector-react-hooks";

function Connect() {
    const [status, connect, getWallet] = useConnect(wallets.metamask());

    return (
        <div>
            <Button
                variant="outlined"
                sx={{ borderColor: "inherit", color: "inherit" }}
                onClick={() => {
                    connect();
                }}
            >
                {status.isConnected ? "connected" : "NO connection"}
            </Button>
            <Button
                variant="outlined"
                sx={{ borderColor: "inherit", color: "inherit" }}
                onClick={() => getWallet()}
            >
                Wallet
            </Button>
            {status.wallet ? status.wallet : "Wallet not found"}
        </div>
    );
}

export default Connect;
