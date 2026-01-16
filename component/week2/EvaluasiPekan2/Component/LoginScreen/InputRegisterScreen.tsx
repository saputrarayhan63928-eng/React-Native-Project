import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../Auth/AuthContext';

function Register() {
  const {register} = useAuth()
  const Navigator = useNavigation<NativeStackNavigationProp<any>>()

  const [username, setUsername] = useState('')
  const [password,setPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    try{
      register(username,password)
      Navigator.replace('Login')
    } catch (e:any) {
      Alert.alert(e.message)
    }
  }


  return (
    // {---Ini Bagian Login Menu---}
    <View style={Styles.screen}>
      <View style={Styles.loginMenu}>
        <TouchableOpacity
        onPress={() => Navigator.replace('Login')}
        >Login</TouchableOpacity>
        <Text>|</Text>
        <Text>Register</Text>
      </View>
      {/* --- Input Name--- */}
      <View>
        <Text style={Styles.TextInput}>UserName Address</Text>
      </View>
      <View>
        <TextInput
          style={Styles.inputText}
          placeholder="Masukkan Email"
          placeholderTextColor="#9CA3AF"
          onChangeText={setUsername}
        />
      </View>
      {/* --- Input Password --- */}
      <View style={Styles.PasswordInput}>
        <Text style={Styles.TextInput}>Password</Text>
        <Text>Forgot Password?</Text>
      </View>
      <View style={Styles.passwordWrapper}>
        <TextInput
          style={Styles.PasswordInputIndicator}
          placeholder="Masukkan Pasword"
          secureTextEntry={!showPassword}
          placeholderTextColor="#9CA3AF"
          onChangeText={setPassword}
        />
        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          style={Styles.eyeIcon}
        >
          <Text>{showPassword ? 'Hide' : 'Show'}</Text>
        </Pressable>
      </View>
      {/* ---Pengulangan Password--- */}
      {/* <View style={Styles.PasswordInput}>
        <Text style={Styles.TextInput}>Password</Text>
        <Text>Forgot Password?</Text>
      </View>
      <View style={Styles.passwordWrapper}>
        <TextInput
          style={Styles.PasswordInputIndicator}
          placeholder="Masukkan Pasword"
          secureTextEntry={!showPassword}
          placeholderTextColor="#9CA3AF"
        />
        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          style={Styles.eyeIcon}
        >
          <Text>{showPassword ? 'Hide' : 'Show'}</Text>
        </Pressable>
      </View> */}
      {/* --- Login Button --- */}
      <TouchableOpacity
        disabled={false}
        activeOpacity={0.5}
        style={Styles.button}
        onPress={handleRegister}
      >
        <Text style={{ color: 'white' }}>Sign In</Text>
      </TouchableOpacity>
      {/* --- Pemisah OR--- */} 
      <View style={Styles.divider}>
        <View style={Styles.line} />
        <Text style={Styles.or}>OR</Text>
        <View style={Styles.line} />
      </View>
      {/* --- Sign Up Button --- */}
      <View style={Styles.loginMenu}>
        <Text style={{ color: 'grey' }}>Do you Have an account yet?</Text>
        <Pressable>
          <TouchableOpacity 
          onPress={() => Navigator.replace("Login")}
           >
            <Text  style={Styles.signUpBtn}>
            Login
            </Text>
            </TouchableOpacity>
        </Pressable>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
        justifyContent:'center',
    paddingHorizontal:20,
    gap:12
  },
  loginMenu: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  inputText: {
    borderBlockColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  TextInput: {
    fontSize: 18,
  },
  passwordWrapper: {
    position: 'relative',
  },
  PasswordInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PasswordInputIndicator: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    paddingRight: 44,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  eyeIcon: {
    position: 'absolute',
    right: 14,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E5E7EB',
  },
  or: {
    marginHorizontal: 10,
    fontSize: 12,
    color: '#9CA3AF',
  },
  socialBtn: {
    backgroundColor: '#fff',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    paddingVertical: 14,
    marginBottom: 12,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },

  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },

  socialText: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '500',
  },
  signUpBtn: {
    fontWeight: 'bold',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
});

export default Register