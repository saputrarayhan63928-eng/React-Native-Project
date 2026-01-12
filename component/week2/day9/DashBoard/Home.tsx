import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



const homeScreem = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    return(
        <View>
            <Text>Home Screen</Text>
            <Text>Ini Screen Home</Text>
        </View>
    )
}

export default homeScreem