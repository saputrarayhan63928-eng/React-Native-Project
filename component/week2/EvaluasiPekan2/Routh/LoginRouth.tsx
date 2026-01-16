import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '../Component/LoginScreen/InputRegisterScreen';
import Login from '../Component/LoginScreen/InputLoginScreen';
import AuthProvider from '../Auth/AuthContext';
import MainRouth from './MainRouth';

const Routh = createNativeStackNavigator();

function LoginRouth() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routh.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Routh.Screen name="Login" component={Login} />
          <Routh.Screen name="Register" component={Register} />
          <Routh.Screen name="Main" component={MainRouth}/>
        </Routh.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default LoginRouth;
