import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Component/LoginScreen/InputLoginScreen";
import Register from "../Component/LoginScreen/InputRegisterScreen";

const Stack = createNativeStackNavigator()

function AuthRouth(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    )
}

export default AuthRouth