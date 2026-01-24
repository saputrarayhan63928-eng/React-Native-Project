import { ReactNode, useEffect, useState } from "react";
import { View } from "react-native";
import * as Keychain from 'react-native-keychain'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../Auth/AuthContext";

const EXPIRED_KEY = 'expired_at'

type Props ={
    children: ReactNode
}

function ProtectedRoute({children} : Props){
    const {logout} = useAuth()
    const [checking, setChecking] = useState(true)

    useEffect(() =>{
        const checkToken = async () =>{
            const token = await Keychain.getGenericPassword()
            const expiredAt = await AsyncStorage.getItem(EXPIRED_KEY)

            if(!token || !expiredAt || Date.now() > Number(expiredAt)){
               await logout()
                return
            }

            setChecking(false)
        }

        checkToken()
    }, [logout])

    if(checking){
        return null
    }

    return(
        <View style={{flex: 1}}>
            {children}
        </View>
    )
}

export default ProtectedRoute