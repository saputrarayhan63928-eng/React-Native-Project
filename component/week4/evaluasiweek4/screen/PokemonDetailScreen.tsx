import { useEffect, useState } from 'react';
import { Image, Text, View, Button } from 'react-native';
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
    <View style={{ padding: 16 }}>
      <Image
        source={{ uri: data.sprites.font_default }}
        style={{ width: 150, height: 150 }}
      />

      <Text style={{ fontSize: 24, textTransform: 'capitalize' }}>
        {data.name}
      </Text>

      <Text>Height: {data.height}</Text>
      <Text>Weight: {data.weight}</Text>

      <Text>
        Types: {data.types.map(t => t.type.name).join(', ')}
      </Text>


      <Button
        title={favorite ? 'Unfavorite' : 'Add to Favorite'}
        onPress={onToggleFavorite}
      />
    </View>
  );
}
