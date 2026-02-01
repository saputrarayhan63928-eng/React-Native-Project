import { FlatList, Text, TouchableOpacity } from 'react-native';
import { usePokemonLIst } from '../hooks/usePokemonList';
import { Loading } from '../component/Loading';
import { ErrorState } from '../component/ErrorState';


export function PokemonListScreen({ navigation }: any) {
  const { data, loading, error, reload } = usePokemonLIst();

  if (loading) return <Loading />;
  if (error) return <ErrorState message={error} onRetry={reload} />;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={{ padding: 16 }}
          onPress={() =>
            navigation.navigate('Detail', { name: item.name })
          }
        >
          <Text style={{ fontSize: 16 }}>{item.name}</Text>
        </TouchableOpacity>
      )}
    />
  );
}
