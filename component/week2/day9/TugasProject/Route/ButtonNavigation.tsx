import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../Screen/Login';
import ListProduct from '../Screen/ListProduct';
import { NavigationContainer } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();

function ButtonNavigation() {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Tabs.Screen name="Login" component={Login} />
        <Tabs.Screen name="MarketPlace" component={ListProduct} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default ButtonNavigation;
