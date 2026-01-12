import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



const LoginScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    return(
        <View>
            <TouchableOpacity
                onPress={() => navigation.replace('DashBoard')}
            >
                <Text>Go to Register</Text>
            </TouchableOpacity>
            <Text>Login Screen</Text>
            <Text>Ini Screen Login</Text>
        </View>
    )
}

export default LoginScreen;