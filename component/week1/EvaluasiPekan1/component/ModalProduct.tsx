import React from "react";
import { View, TouchableOpacity, Text , TextInput, Alert, StyleSheet } from "react-native";
import DataProduct from "../context/DataProduct";
import { useState } from "react";

function ModalProduct({ onSubmit, onClose }: any) {
    const [img,setImg] = useState('');
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');

    const handleProduct = () =>{
        if(!img || !name || !price) {
            Alert.alert('Please fill all fields');
            return;
        }

        const newProduct = {
            id: DataProduct.length + 1,
            name: name,
            price: Number(price),
            img: img
        };

        onSubmit(newProduct);
        onClose();
    }

    return(   
    <View >
        <Text style={styles.Screen}>Input Product</Text>
        <TextInput 
        style={styles.input}
        placeholder="Masukkan Image url"
        keyboardType="default"
        onChangeText={setImg}
        />
        <TextInput
            style={styles.input}
        placeholder="Masukkan Nama Produk"
        keyboardType="default"
        onChangeText={setName}/>
        <TextInput
            style={styles.input}
        placeholder="Masukkan Harga Produk"
        keyboardType="numeric"
        onChangeText={setPrice}/>
        <TouchableOpacity
        style={styles.buttonSumbit}
        onPress={() => {handleProduct()
        }}>
            <Text style={{color: 'white', textAlign: 'center'}}>Submit</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    Screen:{
        flex:1,
        marginTop:30
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 8,
        marginVertical: 8,
    },
      name: {
    fontWeight: "bold",
    marginTop: 8,
  },
  buttonSumbit:{
     backgroundColor: 'blue',
            padding: 10,
            marginTop: 10,
            borderRadius:12 
  }
});

export default ModalProduct 