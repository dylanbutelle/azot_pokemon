import { StatusBar } from "expo-status-bar";
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { useState } from "react";
const queryClient = new QueryClient();

interface Props {
  url: object;
}
export default function PokemonPresentationScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const fetcher = () =>
    fetch(route.params.url).then((response) => response.json());
  const { data, isLoading } = useQuery("GetOnePokemon", fetcher);

  const URL_FRONT =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    data?.id +
    ".png";
  const URL_BACK =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/" +
    data?.id +
    ".png";
  const [image, setImage] = useState(URL_FRONT);
  return (
    <View style={styles.container}>
      <Text style={styles.pokemonName}>{data?.name}</Text>

      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <Pressable
        onPress={() => {
          image === URL_FRONT ? setImage(URL_BACK) : setImage(URL_FRONT);
        }}
      >
        <Ionicons name="reload-circle" size={65} color="red" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  pokemonName: {
    padding: 25,
    fontFamily: "Pixeled",
  },
  image: {
    width: 250,
    height: 250,
  },
});
