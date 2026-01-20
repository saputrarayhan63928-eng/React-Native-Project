import React, { useState , useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


function LoginUserSimulasi() {
    const [Email, setEmail] = useState('')
    const [data,setData] = useState<string|null>('')
    const [status,setStatus] = useState(false)
  // const [showPassword,setShowPassword] = useState(false)

  // Storing string value
  const storeData = async (value: any) => {
    try {
      await AsyncStorage.setItem('my-key', value);
    } catch (e) {
      // saving error
    }
    finally{
        setStatus(true)
    }
  };
 
    useEffect(() => {
        getData()
    }, [status])


  const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('my-key');
    setData(value)
  } catch (e) {
    // error reading value
  }
};

const clearAll = async () => {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }
finally{
    setStatus(false)
}
  console.log('Done.')
}


  return (
    <View>
      {/* --- Input Email--- */}
      <View>
        <Text style={Styles.TextInput}>Email Address</Text>
      </View>
      <View>
        <TextInput
          style={Styles.inputText}
          placeholder="Masukkan Email"
          placeholderTextColor="#9CA3AF"
          onChangeText={setEmail}
        />
      </View>

      {/* --- Login Button --- */}
      <TouchableOpacity
        disabled={false}
        activeOpacity={0.5}
        style={Styles.button}
        onPress={() => storeData(Email)}
      >
        <Text style={{ color: 'white' }}>Log In</Text>
      </TouchableOpacity>

      <View>
        <Text>Ini Isi Async Storage</Text>
        <Text>{data}</Text>
      </View>

      <TouchableOpacity
       disabled={false}
        activeOpacity={0.5}
        style={Styles.button}
        onPress={clearAll}
      >
        <Text>Munculkan</Text>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginLeft: 12,
    marginRight: 12,
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

export default LoginUserSimulasi;
