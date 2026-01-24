import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useCart } from '../../Auth/CartContext';

type CartItem = {
  id: string;
  title: string;
  price: number;
  qty: number;
};

const dummyCart: CartItem[] = [
  { id: '1', title: 'T-Shirt', price: 120000, qty: 1 },
  { id: '2', title: 'Shoes', price: 350000, qty: 2 },
];

function CartScreen() {
    const {cart} = useCart()
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keranjang</Text>

      <FlatList
        data={cart}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.title}</Text>
            <Text>Qty: {item.qty}</Text>
            <Text>$ {item.price.toLocaleString()}</Text>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.total}>Total: $ {total.toLocaleString()}</Text>

        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
    marginBottom: 12,
  },
  name: {
    fontWeight: '600',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingTop: 16,
  },
  total: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  checkoutBtn: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default CartScreen;
