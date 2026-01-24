import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Product } from '../Services/productService';

const CART_KEY = 'cart_ids';
const CART_META_KEY = 'cart_meta';

type CartMeta = {
  count: number;
  updatedAt: number;
};

type CartItem = Product & { qty: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const [[, ids], [, meta]] = await AsyncStorage.multiGet([
          CART_KEY,
          CART_META_KEY,
        ]);

        if (ids) {
          const persedIds: string[] = JSON.parse(ids);

          setCart(
            persedIds.map(id => ({
              id,
              title: '',
              price: 0,
              image: '',
              qty: 1,
            })) as CartItem[],
          );
        }
      } catch (e) {
        console.log('Load cart error', e);
      }
    })();
  }, []);

  const persistCart = async (items: CartItem[]) => {
    const ids = items.map(i => i.id);
    const meta: CartMeta = {
      count: items.reduce((a, b) => a + b.qty, 0),
      updatedAt: Date.now(),
    };

    await AsyncStorage.multiSet([
      [CART_KEY, JSON.stringify(ids)],
      [CART_META_KEY, JSON.stringify(meta)],
    ]);
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      const updated = exists
        ? prev.map(p => (p.id === product.id ? { ...p, qty: p.qty + 1 } : p))
        : [...prev, { ...product, qty: 1 }];

      persistCart(updated);
      return updated;
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev =>{
       const updated = prev
        .map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item)
        .filter(item => item.qty > 0)

        persistCart(updated)
        return updated
   });
  };
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart harus di dalam CartProvider');
  return ctx;
};
