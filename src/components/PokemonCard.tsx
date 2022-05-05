import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
export default function PokemonCard() {
  const [loaded] = useFonts({
    Pixeled: require('../../assets/fonts/Pixeled.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.card}>
      <Text style={styles.name}>PIKACHU</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height:100,
	  width:'95%',
    backgroundColor: 'red',
    justifyContent:'center',
	  alignItems:'center',
    marginBottom:20,
  },
  name:{
    fontSize:20,
    color:'white',
    fontFamily:'Pixeled',
  }
});
