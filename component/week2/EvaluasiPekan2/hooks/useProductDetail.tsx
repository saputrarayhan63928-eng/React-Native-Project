import { useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import { getAllProduct, Product } from '../Services/productService';
import { fallbackProduct } from '../Data/fallbackProduct';

export function useAllProduct() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const LoadProduct = async () => {
      try {
        const result = await getAllProduct();

        if (result.status === 404 || result.status === 500) {
          console.error('HTTP Error :', result.status);

          setProducts(fallbackProduct);

          ToastAndroid.show(
            'Gagal memuat data terbaru. Menampilkan versi arsip',
            ToastAndroid.SHORT,
          );
        } else {
          setProducts(result.data);
        }
      } catch (err) {
        console.error('NETWORK Error:', err);

        setProducts(fallbackProduct);
        ToastAndroid.show(
          'Gagal memuat data terbaru. Menampilkan versi arsip.',
          ToastAndroid.SHORT,
        );
      } finally{
        setLoading(false)
      }
    };
    LoadProduct()
  }, []);


  return { loading,products}
}
