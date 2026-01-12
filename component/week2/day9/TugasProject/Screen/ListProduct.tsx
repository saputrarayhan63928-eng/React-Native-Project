import React ,{useState} from "react";
import DataProduct from "../Data/DataIsi";
import { FlatList, Image,Text,View,StyleSheet,TouchableOpacity, Modal } from "react-native";
import ModalProduct from "./ModalProduct";

function ListProduct(){
    const [Data,setData] = useState(DataProduct);

    const handleAddProduct = (newProduct:any) => {
        setData([...Data, newProduct]);
    }
    
    return(
     <View style={styles.main}>
        <FlatList
        contentContainerStyle={{gap: 16}}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{justifyContent: "space-between"}}
        data={Data}
        numColumns={2}
        renderItem={({item}) => 
        <View style={styles.card}>
            <Image
            source={{uri: item.img}}
            style= {styles.image}
            />
            <Text style={styles.name}>Name: {item.name}</Text>
            <Text style={styles.price}>Price: {item.price}</Text>
        </View>
        }
        keyExtractor={(item) =>item.id.toString() }
        />

        <Modal
        visible={false}
        animationType="slide"
        // onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
        <ModalProduct
        onSubmit={handleAddProduct}
        />
        </View>
        </Modal>
     </View>   
    )
}

const styles = StyleSheet.create({
  card: {
    width: "48%",        
    marginBottom: 16,
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "contain",
  },
  name: {
    fontWeight: "bold",
    marginTop: 8,
  },
  price: {
    marginTop: 4,
  },
  main:{
    flex:1,
    backgroundColor:"#523333dd"
  },
  button: {
    backgroundColor:'gray',
    color: 'blue',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
    margin: 80,
    padding: 10,
    borderRadius: 8,  
  }
});


export default ListProduct