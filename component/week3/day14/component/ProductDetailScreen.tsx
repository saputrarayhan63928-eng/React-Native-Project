import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ToastAndroid } from 'react-native';

interface Product {
  id: string;
  name: string;
  image: string;
}

const fallbackProduct: Product = {
  id: 'fallback',
  name: 'Produk Arsip',
  image: 'https://via.placeholder.com/150',
};

function ProductDetailScreen() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://api.example.com/product/1');

        if (!response.ok) {
          // ⬅️ INI KUNCI TUGAS
          console.error('HTTP STATUS:', response.status);

          if (response.status === 404 || response.status === 500) {
            setProduct(fallbackProduct);

            ToastAndroid.show(
              'Gagal memuat data terbaru. Menampilkan versi arsip.',
              ToastAndroid.SHORT
            );
          }

          return;
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('NETWORK ERROR:', error);

        setProduct(fallbackProduct);
        ToastAndroid.show(
          'Gagal memuat data terbaru. Menampilkan versi arsip.',
          ToastAndroid.SHORT
        );
      } finally {
        // ⬅️ SPINNER HARUS MATI DALAM SEMUA KONDISI
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (!product) {
    return <Text>Data tidak tersedia</Text>;
  }

  return (
    <View>
      <Image source={{ uri: product.image }} style={{ width: 150, height: 150 }} />
      <Text>{product.name}</Text>
    </View>
  );
}

export default ProductDetailScreen;
