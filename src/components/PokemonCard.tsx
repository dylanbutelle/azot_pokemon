import {StyleSheet, Text, View} from 'react-native';
import {useFonts} from 'expo-font';
interface Pokemon {
  url: string;
  name: string;
}
export default function PokemonCard(props: Pokemon) {
  //Add font
  const [loaded] = useFonts({
    Pixeled: require('../../assets/fonts/Pixeled.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    //Create card design
    <View style={styles.card}>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    width: '95%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Pixeled',
  },
});
