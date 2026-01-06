import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   ImageBackground,
//   StatusBar,
//   Switch,
//   StyleSheet,
// } from 'react-native';

// import ImageBackgroundExample from './component/week1/day3/tugas/ImageBackground/ImageBackground';
// import TextExample from './component/week1/day3/tugas/Text/Text';
// import  ImageComponent from './component/week1/day3/tugas/Image/PartOfImage';
// import TextInputExample from './component/week1/day3/tugas/TextInput/TextInput';
// import SwitchComponent from './component/week1/day3/tugas/Switch/SwitchComponent';

import Login from './component/week1/dat4/pelajaran/login';
import ContactList from './component/week1/dat4/pelajaran/SectionList';

export default function App() {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
  //   <ImageBackground
  //     source={{
  //       uri: 'https://reactjs.org/logo-og.png',
  //     }}
  //     resizeMode="cover"
  //     style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
  //   >
  //     <StatusBar backgroundColor={'red'} />
  //     <Text style={{ color: 'white' }}>App</Text>
  //     {/* ini import image dari internet */}
  //     <Image
  //       source={{ uri: 'https://reactjs.org/logo-og.png' }}
  //       style={{ width: 200, height: 200 }}
  //     />
  //     {/* ini import image di local  */}
  //     <Image
  //       source={require(`./src/image/Gemini_Generated_Image_yuqzkpyuqzkpyuqz.png`)}
  //       style={{ width: 200, height: 200 }}
  //     />
  //     <TextInput
  //       placeholder="Masukkan teks di sini"
  //       style={{
  //         borderWidth: 1,
  //         borderColor: 'black',
  //         width: 200,
  //         backgroundColor: 'white',
  //       }}
  //       onChangeText={username => console.log(username)}
  //       keyboardType="default"
  //     />
  //     <Switch
  //       trackColor={{ false: '#767577', true: '#81b0ff' }}
  //       thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
  //       ios_backgroundColor="#3e3e3e"
  //       onValueChange={toggleSwitch}
  //       value={isEnabled}
  //     />
  //   </ImageBackground>
    // <ImageBackgroundExample>
    //   <TextExample />
    //   <ImageComponent/>
    //   <TextInputExample/>
    //   <SwitchComponent/>
    // </ImageBackgroundExample>

    // <Login />
    <ContactList />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
