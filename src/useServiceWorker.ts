import React, { useState, useCallback, useEffect } from "react";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

function useServiceWorker() {
    const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);
    const [aUpdate, setAUpdate] = useState(false);

    const onUpdate = useCallback((registeration: ServiceWorkerRegistration) => {
        setAUpdate(true);
        setWaitingWorker(registeration.waiting);
    }, [])

    const update = useCallback(() => {
        waitingWorker?.postMessage({ type: "SKIP_WAITING" });
        setAUpdate(false);
        window.location.reload();
    }, [waitingWorker])

    useEffect(() => {
        serviceWorkerRegistration.register({
            onUpdate: onUpdate
        })
    }, [onUpdate])

    return { aUpdate, update, waitingWorker };
}

export default useServiceWorker;