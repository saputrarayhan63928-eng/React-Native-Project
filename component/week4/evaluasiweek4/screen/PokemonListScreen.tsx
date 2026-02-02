import { useEffect, useState, } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

import {
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
} from 'react-native';
import { usePokemonList } from '../hooks/usePokemonList';
import { Loading } from '../component/Loading';
import { ErrorState } from '../component/ErrorState';
import { isFavorite, toggleFavorite } from '../storege/favoriteStorage';

export function PokemonListScreen({ navigation }: any) {
  const { data, loading, error, reload } = usePokemonList();
  const [favorites, setFavorites] = useState<string[]>([]);



useFocusEffect(
  useCallback(() => {
    loadFavorites();
  }, [data])
);

const loadFavorites = async () => {
  const favs = await Promise.all(
    data.map(async p =>
      (await isFavorite(p.name)) ? p.name : null
    )
  );
  setFavorites(favs.filter(Boolean) as string[]);
};

  const onToggleFavorite = async (name: string) => {
    const updated = await toggleFavorite(name);
    setFavorites(updated);
  };

  const sortedData = [...data].sort((a, b) => {
    const aFav = favorites.includes(a.name);
    const bFav = favorites.includes(b.name);
    return Number(bFav) - Number(aFav);
  });

  if (loading) return <Loading />;
  if (error) return <ErrorState message={error} onRetry={reload} />;

  return (
    <FlatList
      data={sortedData}
      numColumns={2}
      keyExtractor={item => item.name}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      contentContainerStyle={{ padding: 16, gap: 16 }}
      renderItem={({ item }) => {
        const image = getPokemonImage(item.url);
        const fav = favorites.includes(item.name);

        return (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('Detail', { name: item.name })
            }
          >
            <TouchableOpacity
              style={styles.favorite}
              onPress={() => onToggleFavorite(item.name)}
            >
              <Text style={{ fontSize: 18 }}>
                {fav ? '⭐' : '☆'}
              </Text>
            </TouchableOpacity>

            <Image source={{ uri: image }} style={styles.image} />

            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

function getPokemonImage(url: string) {
  const id = url.split('/').filter(Boolean).pop();
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

const styles = StyleSheet.create({
  card: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    elevation: 3,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  favorite: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 10,
  },
});
