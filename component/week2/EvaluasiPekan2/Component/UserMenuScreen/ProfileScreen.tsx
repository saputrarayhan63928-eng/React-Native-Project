import React , {useState}from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useAuth } from '../../Auth/AuthContext';
import { useNavigation } from "@react-navigation/native";


function ProfileScreen() {
const Navigation = useNavigation<any>()
const parentRoute = Navigation.getParent()?.getState()
  const userID =
    parentRoute?.routes[parentRoute.index]?.params?.userID;
const {logout} = useAuth()

  return (
    <View style={styles.root}>
      {/* Logout button */}
      <View>
        <TouchableOpacity
           disabled={false}
        activeOpacity={0.5}
        style={styles.logoutButton}
        onPress={logout}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      {/* Container */}
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
        </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
   root: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logoutButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#ef4444',
    borderRadius: 6,
    zIndex: 10,
  },
   logoutText: {
    color: '#fff',
    fontWeight: '600',
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

