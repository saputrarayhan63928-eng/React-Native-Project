import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreenProduct from "../Component/ProductScreen/MainScreen";
import ProfileRouth from "./UserRouth";
import ProtectedRoute from "./ProtectedRoute";
import CartScreen from "../Component/ProductScreen/CartScreen";

const Tabs = createBottomTabNavigator()

function MainRouth(){

    return(
            <Tabs.Navigator
            initialRouteName="Market"
            screenOptions={{headerShown: true}}
            >
                <Tabs.Screen name="Market" component={MainScreenProduct}/>
                <Tabs.Screen name="Profile" component={ProfileRouth} />
                <Tabs.Screen name="Cart" children={() => (
                    <ProtectedRoute>
                        <CartScreen/>
                    </ProtectedRoute>
                )}/>
            </Tabs.Navigator>
    )
}

export default MainRouth