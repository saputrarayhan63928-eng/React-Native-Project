import React from "react";
import { NavigationContainer, } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import homeScreem from "../DashBoard/Home";
import ProfileScreen from "../DashBoard/profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createBottomTabNavigator();

function ButtonTabsNavigator() {
    return(
            <Stack.Navigator initialRouteName="Home"
            screenOptions={{headerShown: true}}
            >
                <Stack.Screen name="Home" component={homeScreem} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
    )
}

export default ButtonTabsNavigator;