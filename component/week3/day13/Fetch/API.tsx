import axios from "axios";
import { getNetworkState } from "./networkState";

export const api = axios.create({
    baseURL: 'https://dummyjson.com/products',
    timeout: 10000
})

api.interceptors.request.use(config => {
    const network = getNetworkState()

    if(!network.isConnected){
        return Promise.reject({
            message: 'No Network Connection',
            isOffline: true
        })
    }

    if(network.type === 'cellular'){
        config.timeout = 20000
    }

    if(network.effectiveType === '2g'){
        config.headers['X-Low-Bandwidth'] = 'true'
    }

    return config
})

api.interceptors.response.use(
    Response => Response,
    async error => {
        const network = getNetworkState()

        if(!network.isConnected){
            error.isNetworkUnstable = true
        }

        if(error.code === 'ECONNABORTED'){
            error.isTimeout = true
        }

        return Promise.reject(error)
    }
)