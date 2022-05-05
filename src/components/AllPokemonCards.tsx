import {useQuery} from 'react-query';
import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView, Pressable} from 'react-native';
import PokemonCard from './PokemonCard';
//Get JSON from the API https://pokeapi.co/
const fetcher = () =>
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(response =>
    response.json(),
  );

export default function AllPokemonCards({navigation}: {navigation: any}) {
  //Get all info
  const {data, isLoading} = useQuery('GetAllPokemon', fetcher);
  if (isLoading) return null;
  return (
    //SafeArea
    <SafeAreaView style={styles.container}>
      {/* for scrolling */}
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
          alignItems: 'center',
        }}>
        {/*Show results */}
        {data?.results.map((item: {url: string; name: string}) => (
          //Create a Pressable to redirect the user to the good root
          <Pressable
            key={item.name}
            style={styles.press}
            onPress={() => navigation.navigate('Pokemon', {url: item.url})}>
            {/*Showing card */}
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
    width: '100%',
  },
  press: {
    width: '100%',
    alignItems: 'center',
  },
});
