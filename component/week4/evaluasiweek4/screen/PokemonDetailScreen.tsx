import { useEffect, useState } from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { usePokemonDetail } from '../hooks/usePokemonDetail';
import { Loading } from '../component/Loading';
import { ErrorState } from '../component/ErrorState';
import { isFavorite, toggleFavorite } from '../storege/favoriteStorage';

export function PokemonDetailScreen({ route }: any) {
  const { name } = route.params;
  const [favorite, setFavorite] = useState(false);
  const { data, loading, error } = usePokemonDetail(name);

  useEffect(() => {
    isFavorite(name).then(setFavorite);
  }, [name]);

  const onToggleFavorite = async () => {
    const updated = await toggleFavorite(name);
    setFavorite(updated.includes(name));
  };

  if (loading) return <Loading />;
  if (error || !data) {
    return <ErrorState message={error ?? 'Terjadi kesalahan'} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {data.sprites.front_default && (
          <Image
            source={{ uri: data.sprites.front_default }}
            style={styles.image}
          />
        )}

        <Text style={styles.name}>{data.name}</Text>

        <View style={styles.typeContainer}>
          {data.types.map(t => (
            <View key={t.type.name} style={styles.typeBadge}>
              <Text style={styles.typeText}>{t.type.name}</Text>
            </View>
          ))}
        </View>

        <View style={styles.stats}>
          <Text style={styles.stat}>Height: {data.height}</Text>
          <Text style={styles.stat}>Weight: {data.weight}</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.button,
            favorite && styles.buttonActive,
          ]}
          onPress={onToggleFavorite}
        >
          <Text style={styles.buttonText}>
            {favorite ? 'Remove from Favorite' : 'Add to Favorite'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    elevation: 3,
  },
  image: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    marginBottom: 8,
  },
  typeContainer: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  typeBadge: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  typeText: {
    fontSize: 12,
    textTransform: 'capitalize',
  },
  stats: {
    width: '100%',
    marginBottom: 16,
  },
  stat: {
    fontSize: 14,
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#ffcb05',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonActive: {
    backgroundColor: '#d32f2f',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#000',
  },
});
