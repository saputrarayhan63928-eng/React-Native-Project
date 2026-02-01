import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

interface Props {
  name: string;
  onPress: () => void;
  isFavorite?: boolean;
}

export function PokemonCard({ name, onPress, isFavorite }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
      {isFavorite && <Text style={styles.favorite}>★</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginHorizontal: 12,
    marginVertical: 6,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  name: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
  favorite: {
    color: '#f5b301',
    fontSize: 18,
  },
});
