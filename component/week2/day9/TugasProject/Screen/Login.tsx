import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable
} from 'react-native';

function Login() {
    const [showPassword,setShowPassword] = useState(false)
  return (

    // {---Ini Bagian Login Menu---}
    <View style={Styles.screen}>
      <View style={Styles.loginMenu}>
        <Text>Login</Text>
        <Text>|</Text>
        <Text>Register</Text>
      </View>

    {/* --- Input Email--- */}
      <View>
        <Text style={Styles.TextInput}>Email Address</Text>
      </View>
      <View>
        <TextInput 
        style={Styles.inputText}
        placeholder="Masukkan Email"
        placeholderTextColor="#9CA3AF"
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
        
        />
        <Pressable
         onPress={() => setShowPassword(!showPassword)}
        style={Styles.eyeIcon}
        >
            <Text>{showPassword ? 'Hide' : 'Show'}</Text>
        </Pressable>
      </View>

      {/* --- Login Button --- */}
      <TouchableOpacity 
      disabled={false}
      activeOpacity={0.5}
      style={Styles.button}>
        <Text style={{color:'white'}}>Log In</Text>
      </TouchableOpacity>

      {/* --- Pemisah OR--- */}
      <View style={Styles.divider}>
        <View style={Styles.line} />
        <Text style={Styles.or}>OR</Text>
        <View style={Styles.line} />
      </View>

        {/* --- Google Login Button --- */}
      <Pressable style={Styles.socialBtn}>
        <View style={Styles.row}>
          <Text style={Styles.socialText}>Continue with Google</Text>
        </View>
      </Pressable>

      {/* --- Apple Login Button --- */}
       <Pressable style={Styles.socialBtn}>
        <View style={Styles.row}>
          <Text style={Styles.socialText}>Continue with Apple</Text>
        </View>
      </Pressable>

         {/* --- Binance Login Button --- */}
       <Pressable style={Styles.socialBtn}>
        <View style={Styles.row}>
          <Text style={Styles.socialText}>Continue with Binance</Text>
        </View>
      </Pressable>

            {/* --- Wallet Login Button --- */}
       <Pressable style={Styles.socialBtn}>
        <View style={Styles.row}>
          <Text style={Styles.socialText}>Continue with Wallet</Text>
        </View>
      </Pressable>

      {/* ---Pemisah--- */}
      <View style={Styles.divider}>
        <View style={Styles.line} />
        <View style={Styles.line} />
      </View>

        {/* --- Sign Up Button --- */}
      <View style={Styles.loginMenu}>
        <Text style ={{color:'grey'}}>Don't Have an account yet?</Text>
        <Pressable ><Text style={Styles.signUpBtn}>Sign up</Text></Pressable>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
     marginLeft: 12,
    marginRight:12
  },
  loginMenu:{
    flexDirection:'row',
    justifyContent:'center',
    gap:5,
  },
  inputText: {
    borderBlockColor:'gray',
    borderWidth:1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  TextInput:{
    fontSize:18
  },
  passwordWrapper: {
  position: 'relative',
},
  PasswordInput:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  PasswordInputIndicator:{
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
    backgroundColor:'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
   alignItems:'center'
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
  signUpBtn:{
    fontWeight:'bold',
    fontSize:15,
    textDecorationLine:'underline'
  }
});

export default Login;
