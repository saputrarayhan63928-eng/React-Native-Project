import React, { Profiler } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../Component/UserMenuScreen/ProfileScreen";

const Drawer = createDrawerNavigator()

function ProfileRouth(){
    return(
            <Drawer.Navigator
            initialRouteName="MainProfile"
            screenOptions={{headerShown: true}}
            >
                <Drawer.Screen name="MainProfile" component={ProfileScreen} options={{title:'Profile'}}/>
            </Drawer.Navigator>
    )
}

export default ProfileRouth