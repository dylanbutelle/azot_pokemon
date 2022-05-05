import { StatusBar } from "expo-status-bar";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

import { StyleSheet, Text, ScrollView, View, SafeAreaView } from "react-native";
import PokemonCard from "./PokemonCard";

const fetcher = () =>
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((response) =>
    response.json()
  );
export default function App() {
  const { data, isLoading } = useQuery("GetAllPokemon", fetcher);

  if (isLoading) return null;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        {data?.results.map((item: { name: string }) => (
          <PokemonCard name={item.name} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
