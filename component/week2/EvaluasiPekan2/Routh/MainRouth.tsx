import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
// import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreenProduct from "../Component/ProductScreen/MainScreen";
import ProfileRouth from "./UserRouth";
import { useAuth } from "../Auth/AuthContext";

const Tabs = createBottomTabNavigator()

function MainRouth({route} :any){
    const {currentUser} = useAuth()
    return(
            <Tabs.Navigator
            initialRouteName="Market"
            screenOptions={{headerShown: true}}
            >
                <Tabs.Screen name="Market" component={MainScreenProduct}/>
                <Tabs.Screen name="Profile" component={ProfileRouth} initialParams={{currentUser}}/>
            </Tabs.Navigator>
    )
}

export default MainRouth