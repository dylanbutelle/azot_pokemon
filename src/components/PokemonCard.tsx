import { StyleSheet, Text, View } from 'react-native';

export default function PokemonCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>Encore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height:90,
	width:'90%',
    backgroundColor: 'red',
    justifyContent:'center',
	alignItems:'center',
  },
  name:{
	fontSize:30,
  }
});
