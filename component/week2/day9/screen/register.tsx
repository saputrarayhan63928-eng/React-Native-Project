import React from "react";
import { View, Text, TextInput, Button, StyleSheet ,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



const RegisterScreen = () => {
    const navigate = useNavigation<NativeStackNavigationProp<any>>()
    return(
        <View>
            <TouchableOpacity
            onPress={() => navigate.replace('Login')}
            >
                <Text>Go to login</Text>
            </TouchableOpacity>
            <Text>Register Screen</Text>
            <Text>Ini Screen Register</Text>
        </View>
    )
}

export default RegisterScreen;