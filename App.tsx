import { StatusBar } from "expo-status-bar";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";

import { StyleSheet, Text, ScrollView, View, SafeAreaView } from "react-native";
import AllPokemonCards from "./src/components/AllPokemonCards";
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AllPokemonCards />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
