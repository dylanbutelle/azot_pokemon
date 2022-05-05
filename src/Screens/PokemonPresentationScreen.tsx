import {StatusBar} from 'expo-status-bar';
import {useQuery, QueryClient, QueryClientProvider} from 'react-query';
import {Ionicons} from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import {useState} from 'react';
const queryClient = new QueryClient();

interface Props {
  url: object;
}
export default function PokemonPresentationScreen({route}: {route: any}) {
  const [backOrFront, setBackOrFront] = useState(1);
  const fetcher = () =>
    fetch(route.params.url).then(response => response.json());
  const {data, isLoading} = useQuery('GetOnePokemon', fetcher);
  if (isLoading) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.pokemonName}>{data.name}</Text>

      <Image
        source={{
          uri: backOrFront
            ? data.sprites.front_default
            : data.sprites.back_default,
        }}
        style={styles.image}
      />
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
