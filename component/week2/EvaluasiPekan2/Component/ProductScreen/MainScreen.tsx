import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import InputProductModal from './InputItemModal';
import { useAllProduct } from '../../hooks/useProductDetail';
import { Product } from '../../Services/productService';

function MainScreenProduct() {
  const { products, loading, addProduct } = useAllProduct();
  // const [Data,setData] = useState<Product[]>([]);
  const [isModalFisible, setIsModalVisible] = useState(false);

  // useEffect(() => {
  //   setData(products)
  // }, [products])

  if (loading) {
    return (
      <View style={styles.loading}>
        <Text>Loading Product...</Text>
      </View>
    );
  }

  return (
    <View style={styles.main}>
      <FlatList
        contentContainerStyle={{ gap: 16 }}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>Name: {item.title}</Text>
            {/* <Text style={styles.name}>Name: {item.name.toUpperCase()}</Text> */}
            <Text style={styles.price}>Price: {item.price}</Text>
            <TouchableOpacity 
            disabled={false} 
            activeOpacity={0.5}
            style={styles.cartButton}
            >
              <Text style={styles.cartText}>Tambah Keranjang</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />

      <TouchableOpacity
       style={styles.fab}
        onPress={() => setIsModalVisible(true)}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
      <Modal
        visible={isModalFisible}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modal}>
          <InputProductModal
            onSubmit={addProduct}
            onClose={() => setIsModalVisible(false)}
            dataProduct={products}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
  },
  name: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  price: {
    marginTop: 4,
  },
  main: {
    flex: 1,
    backgroundColor: '#523333dd',
  },
  button: {
    backgroundColor: 'gray',
    color: 'blue',
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 10,
    margin: 80,
    padding: 10,
    borderRadius: 8,
  },
  loading:{
        flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  cartButton: {
  backgroundColor: '#2563EB',
  paddingVertical: 8,
  borderRadius: 6,
  marginTop: 8,
},
cartText: {
  color: '#fff',
  textAlign: 'center',
  fontWeight: '600',
},
fab: {
  position: 'absolute',
  right: 20,
  bottom: 20,
  width: 56,
  height: 56,
  borderRadius: 28,
  backgroundColor: '#22C55E',
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 5,
},
fabText: {
  color: '#fff',
  fontSize: 28,
  fontWeight: 'bold',
},
modal: {
  flex: 1,
  backgroundColor: '#fff',
  padding: 20,
},

});

export default MainScreenProduct;
