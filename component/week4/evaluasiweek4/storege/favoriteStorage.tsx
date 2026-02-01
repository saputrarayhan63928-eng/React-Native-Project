import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITE_KEY = '@favorite_pokemon';

export async function getFavorites(): Promise<string[]> {
  const json = await AsyncStorage.getItem(FAVORITE_KEY);
  return json ? JSON.parse(json) : [];
}

export async function toggleFavorite(name: string): Promise<string[]> {
  const favorites = await getFavorites();

  const exists = favorites.includes(name);
  const updated = exists
    ? favorites.filter(item => item !== name)
    : [...favorites, name];

  await AsyncStorage.setItem(FAVORITE_KEY, JSON.stringify(updated));
  return updated;
}

export async function isFavorite(name: string): Promise<boolean> {
  const favorites = await getFavorites();
  return favorites.includes(name);
}
