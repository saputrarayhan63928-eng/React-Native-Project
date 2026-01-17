    import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

    export type NetworkStatus = {
        isConnected: boolean
        isInternetReachAble: boolean
        type: `${NetInfoState['type']}`
        effectiveType?: '2g' | '3g' | '4g' | '5g'
    }

    let currentNetwork: NetworkStatus = {
        isConnected: true,
        isInternetReachAble: true,
        type: 'none'
    }

    const listeners = new Set<(state: NetworkStatus) => void>()

    NetInfo.fetch().then(state => {
        updateState(state)
    })

    function updateState(state: NetInfoState){
    const effectiveType =
    state.type === 'cellular'
        ? state.details?.cellularGeneration ?? undefined
        : undefined;
        currentNetwork = {
            isConnected: !!state.isConnected,
            isInternetReachAble: state.isInternetReachable?? true,
            type: state.type,
            effectiveType
        }

        listeners.forEach(cb => cb(currentNetwork))
    }

    NetInfo.addEventListener(updateState)

    NetInfo.fetch().then(updateState)

    export function getNetworkState() {
    return currentNetwork;
    }

    export function subscribeNetwork(cb: (state: NetworkStatus) => void){
        listeners.add(cb)
        cb(currentNetwork)

        return () => {listeners.delete(cb)}
    }