
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider, {useAuth} from "../Auth/AuthContext";
import AuthRouth from "./AuthRouth";
import MainRouth from "./MainRouth";

function RootNavigator(){
  const { isAuthenticated,isLoading} = useAuth()

  if(isLoading) return null

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainRouth/> : <AuthRouth/> }
    </NavigationContainer>
  )
}

export default function AppNavigator(){
  return(
    <AuthProvider>
        <RootNavigator/>
    </AuthProvider>
  )
}