import React , {useState}from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useAuth } from '../../Auth/AuthContext';
import { useNavigation } from "@react-navigation/native";


function ProfileScreen() {
const Navigation = useNavigation<any>()
const parentRoute = Navigation.getParent()?.getState()
  const userID =
    parentRoute?.routes[parentRoute.index]?.params?.userID;


  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{
          uri: 'https://i.pravatar.cc/150',
        }}
        style={styles.avatar}
      />

      {/* Nama */}
      <Text style={styles.name}>{userID}</Text>

      {/* Email */}
      <Text style={styles.email}>hanz@email.com</Text>

      {/* Info tambahan */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Role: User</Text>
        <Text style={styles.infoText}>Member since: 2024</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
  },
  email: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  infoBox: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 6,
  },
});

