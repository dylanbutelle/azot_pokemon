import { useQuery } from "react-query";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Pressable } from "react-native";
import PokemonCard from "./PokemonCard";
const fetcher = () =>
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((response) =>
    response.json()
  );

export default function AllPokemonCards({ navigation }: { navigation: any }) {
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
        {data?.results.map((item: { url: string; name: string }) => (
          <Pressable
            style={styles.press}
            onPress={() => navigation.navigate("Pokemon", { url: item.url })}
          >
            <PokemonCard name={item.name} url={item.url} />
          </Pressable>
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
  press: {
    width: "100%",
    alignItems: "center",
  },
});
