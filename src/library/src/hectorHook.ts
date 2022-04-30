/**
 * This will be implemented in hector
 */

import { useEffect, useState } from "react";
import { Application, Connect } from "hector/packages/hector";
import Metamask from "hector/packages/hector-metamask";

declare var window: any;

export const wallets = {
    metamask: () => new Metamask(window),
};

interface ConnectionStatus {
    /**
     * If wallet connected successfuly
     */
    isConnected: boolean;

    /**
     * Error
     */
    error: any;

    /**
     * Wallet witch user selected
     */
    wallet: string | null;
}

type setter = () => void;
type useConnectReturns = [ConnectionStatus, setter, setter];

function useConnect(wallet: Application): useConnectReturns {
    const [state, setState] = useState<ConnectionStatus>({
        isConnected: false,
        error: null,
        wallet: null,
    });

    const newStat = (stat: object) => setState({ ...state, ...stat });

    const connection = new Connect(wallet);

    /**
     * When component mounted
     * Check if wallet connected already
     */
    // useEffect(() => {
    //     getWallet();
    // });

    const connect: setter = () =>
        connection
            .connect()
            .then((connected) => newStat({ isConnected: connected }))
            .catch((err) => newStat({ error: err }));

    const getWallet: setter = () =>
        connection
            .getSelectedwallet()
            .then((address) => newStat({ wallet: address }))
            .catch((err) => newStat({ error: err }));

    return [state, connect, getWallet];
}

export default useConnect;
