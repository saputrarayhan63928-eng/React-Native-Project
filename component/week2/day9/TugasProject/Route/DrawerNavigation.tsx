import React, { Profiler } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "../Screen/Profile";

const Tabs = createDrawerNavigator()

function DrawerNavigation(){
    return(
        <Tabs.Navigator>
        <Tabs.Screen name="Profile" component={ProfileScreen}/>
        </Tabs.Navigator>
    )
}

export default DrawerNavigation