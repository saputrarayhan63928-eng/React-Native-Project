import React, { Profiler } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "../Component/UserMenuScreen/ProfileScreen";

const Drawer = createDrawerNavigator()

function ProfileRouth({route}: any){
    const {userID} = route.params
    return(
            <Drawer.Navigator
            initialRouteName="MainProfile"
            screenOptions={{headerShown: true}}
            >
                <Drawer.Screen name="MainProfile" component={ProfileScreen} options={{title:'Profile'}} initialParams={{userID}}/>
            </Drawer.Navigator>
    )
}

export default ProfileRouth