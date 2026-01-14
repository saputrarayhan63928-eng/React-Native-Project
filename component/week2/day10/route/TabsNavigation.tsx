import React, { Profiler } from "react";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { NavigationContainer } from "@react-navigation/native";
import MainScreen from "../screen/Main";
import SideScreen from "../screen/Side";
import DrawerNavigatioRoute from "./DrawerNavigation";

const Tabs = createMaterialTopTabNavigator()

function TabsNavigatioRoute(){
    return(
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name="Main" component={MainScreen}/>
                <Tabs.Screen name="Side" component={SideScreen}/>
                <Tabs.Screen name="Drawer" component={DrawerNavigatioRoute}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default TabsNavigatioRoute