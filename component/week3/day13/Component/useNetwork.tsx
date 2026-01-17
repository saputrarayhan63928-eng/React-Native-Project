import { useEffect, useState } from "react";
import { subscribeNetwork, NetworkStatus } from "../Fetch/networkState";


export function useNetwork(){
    const [state,setState] = useState<NetworkStatus | null>(null)

    useEffect(() => {
        const unsub = subscribeNetwork(setState)
        return unsub
    }, [])

    return state
}