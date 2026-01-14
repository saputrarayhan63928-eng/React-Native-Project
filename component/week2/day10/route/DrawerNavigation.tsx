import React, { Profiler } from "react";
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
// import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MassageScreen from "../screen/Messege";
import ProfileScreen from "../screen/Profil";

const Drawer = createDrawerNavigator()

function DrawerNavigatioRoute(){
    return(
            <Drawer.Navigator>
                <Drawer.Screen name="Massage" component={MassageScreen}/>
                <Drawer.Screen name="Profile" component={ProfileScreen}/>
            </Drawer.Navigator>
    )
}

export default DrawerNavigatioRoute