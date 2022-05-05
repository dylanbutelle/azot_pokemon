import {QueryClient, QueryClientProvider} from 'react-query';
import React from 'react';
import {StyleSheet} from 'react-native';
import AllPokemonCards from './src/components/AllPokemonCards';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonPresentationScreen from './src/Screens/PokemonPresentationScreen';
const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      {/* Create navigation with 2 roots */}
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="List"
              component={AllPokemonCards}
              options={{title: 'Pokemon'}}
            />
            <Stack.Screen
              name="Pokemon"
              component={PokemonPresentationScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
