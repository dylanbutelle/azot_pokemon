import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { useNavigate } from "react-router-dom";
import PokemonPresentation from "../Screens/PokemonPresentationScreen";
interface Pokemon {
  url: string;
  name: string;
}
export default function PokemonCard(props: Pokemon) {
  const [loaded] = useFonts({
    Pixeled: require("../../assets/fonts/Pixeled.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: "95%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    color: "white",
    fontFamily: "Pixeled",
  },
});
