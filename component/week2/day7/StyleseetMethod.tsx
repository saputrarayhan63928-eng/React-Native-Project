import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function StyleComponent() {
  const [direction, setDirection] = useState<'row' | 'column' | 'row-reverse'>(
    'row',
  );
  const [justify, setJustify] = useState<'flex-start' | 'center' | 'space-between'>('flex-start')
  const [align, setAlign] = useState<'flex-start' | 'center' | 'stretch'>('flex-start')

  return (
    <View style={Style.screen}>
      <View style={Style.main}>
        <Text style={Style.box}></Text>
        <Text style={Style.box2}></Text>
        <Text style={Style.box3}></Text>
      </View>

      <View style={Style.buttonContainer}>
        <TouchableOpacity onPress={() => setDirection('row')} style={Style.button}>
          <Text>Switch To Row</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDirection('column')} style={Style.button}>
          <Text>Switch To column</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDirection('row-reverse')} style={Style.button}>
          <Text>Switch To row-reverse</Text>
        </TouchableOpacity>
      </View>

      <View style={[Style.main, { flexDirection: direction }]}>
        <Text style={Style.box}></Text>
        <Text style={Style.box2}></Text>
        <Text style={Style.box3}></Text>
      </View>

           <View style={Style.buttonContainer}>
        <TouchableOpacity onPress={() => setJustify('flex-start')} style={Style.button}>
          <Text>Switch To flex-start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setJustify('center')} style={Style.button}>
          <Text>Switch To center</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setJustify('space-between')} style={Style.button}>
          <Text>Switch To space-between</Text>
        </TouchableOpacity>
      </View>


      <View style={[Style.main, { justifyContent: justify }]}>
        <Text style={Style.box}></Text>
        <Text style={Style.box2}></Text>
        <Text style={Style.box3}></Text>
      </View>

                 <View style={Style.buttonContainer}>
        <TouchableOpacity onPress={() => setAlign('flex-start')} style={Style.button}>
          <Text>Switch To flex-start</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAlign('center')} style={Style.button}>
          <Text>Switch To center</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setAlign('stretch')} style={Style.button}>
          <Text>Switch To stretch</Text>
        </TouchableOpacity>
      </View>

       <View style={[Style.main, { alignItems: align, flexDirection: 'column' }]}>
        <Text style={Style.box4}>A1</Text>
        <Text style={Style.box4}>A2</Text>
        <Text style={Style.box4}>A3</Text>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  screen: {
    flex: 1,
  },
  box: {
    backgroundColor: 'red',
    padding: 20,
    margin: 20,
    // flexDirection:'row'
    // borderStyle:"dotted"
    width: 30,
    height: 30,
  },
  box2: {
    backgroundColor: 'green',
    padding: 20,
    margin: 20,
    width: 30,
    height: 30,
  },
  box3: {
    backgroundColor: 'blue',
    padding: 20,
    margin: 20,
    width: 30,
    height: 30,
  },
  box4:{
    backgroundColor:'purple',
    color:"white",
    padding:20,
    margin:20,
    width:100,
    height:100,
  },
  main: {
    backgroundColor: 'grey',
    // flexWrap:"wrap",//{----Dia di gunakan untuk ketika text yg kelebihan muatan menjadi lanjut ke bawahnya----}
    flexDirection: 'row', //{---untuk ngatur textnya biar bisa ke samping---}
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  button: {
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 6,
  },
});

export default StyleComponent;
