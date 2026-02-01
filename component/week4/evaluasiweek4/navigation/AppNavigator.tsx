import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PokemonDetailScreen } from '../screen/PokemonDetailScreen';
import { PokemonListScreen } from '../screen/PokemonListScreen';

export type RootStackParamList = {
  List: undefined;
  Detail: { name: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={PokemonListScreen}
          options={{ title: 'Pokédex' }}
        />
        <Stack.Screen
          name="Detail"
          component={PokemonDetailScreen}
          options={({ route }) => ({
            title: route.params.name.toUpperCase(),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
