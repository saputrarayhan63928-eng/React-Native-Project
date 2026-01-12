import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";



const ProfileScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>()
    return(
        <View>
            <Text>Profile Screen</Text>
            <Text>Ini Screen Profile</Text>
        </View>
    )
}

export default ProfileScreen