import {useQuery} from 'react-query';
import {Ionicons} from '@expo/vector-icons';
import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import {useState} from 'react';

export default function PokemonPresentationScreen({route}: {route: any}) {
  //Use state to know which face we need to show
  const [backOrFront, setBackOrFront] = useState(1);
  //Get JSON from the selected pokemon
  const fetcher = () =>
    fetch(route.params.url).then(response => response.json());
  const {data, isLoading} = useQuery('GetOnePokemon', fetcher);
  if (isLoading) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.pokemonName}>{data.name}</Text>
      {/*Show the good img from the JSON */}
      <Image
        source={{
          uri: backOrFront
            ? data.sprites.front_default
            : data.sprites.back_default,
        }}
        style={styles.image}
      />
      {/*Using our useState to set which is active with a pressable */}
      <Pressable
        onPress={() => {
          backOrFront === 1 ? setBackOrFront(0) : setBackOrFront(1);
        }}>
        <Ionicons name="reload-circle" size={65} color="red" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  pokemonName: {
    padding: 25,
    fontFamily: 'Pixeled',
  },
  image: {
    width: 250,
    height: 250,
  },
});
