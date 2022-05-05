import { StatusBar } from "expo-status-bar";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, SafeAreaView } from "react-native";
import AllPokemonCards from "./src/components/AllPokemonCards";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokemonPresentationScreen from "./src/Screens/PokemonPresentationScreen";
const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="List"
              component={AllPokemonCards}
              options={{ title: "Pokemon" }}
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
    width: "100%",
  },
});
