import React, { createContext, useContext, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

type user = {
  username: string;
  password: string;
};

type AuthContextType = {
  currentUser: user | null;
  register: (username: string, password: string) => Promise<void>;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<user | null>(null);

  const register = async (username: string, password: string) => {
    try {
      const existing = await AsyncStorage.getItem('@user_akun');
      if (existing) {
        const savedUser = JSON.parse(existing);
        if (savedUser.username === username) {
          throw new Error('Username Sudah Terdaftar!!');
        }
      }

      const newUser = { username, password };
      await AsyncStorage.setItem('@user_akun', JSON.stringify(newUser));
      setCurrentUser(newUser);
    } catch (err) {
      Alert.alert(
        'Register Gagal',
        err instanceof Error ? err.message : 'Unknown Error',
      );
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const raw = await AsyncStorage.getItem('@user_akun');
      if (!raw) {
        throw new Error('User Belum Terdaftar');
      }

      const savedUser: user = JSON.parse(raw);

      if (savedUser.username !== username || savedUser.password !== password) {
        throw new Error('Username Atau Password Salah');
      }

      setCurrentUser(savedUser);
    } catch (err) {
      Alert.alert(
        'Login Gagal',
        err instanceof Error ? err.message : 'Unknown Error',
      );
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('@user_akun');
      setCurrentUser(null);
    } catch (err) {
      Alert.alert(
        'Logout Gagal',
        err instanceof Error ? err.message : 'Unknown Error',
      );
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth harus di dalam AuthProvider');
  return ctx;
};

export default AuthProvider;
