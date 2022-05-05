import { StatusBar } from 'expo-status-bar';
import { useQuery } from "react-query";

import { StyleSheet, Text, ScrollView,View,SafeAreaView } from 'react-native';
import PokemonCard from './src/components/PokemonCard';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{
          justifyContent: 'center',
          flexDirection: 'column',width:'100%',alignItems:'center' }}>
            
              <PokemonCard/>
              <PokemonCard/>
              <PokemonCard/>
              <PokemonCard/>
              <PokemonCard/>
              <PokemonCard/>
              <PokemonCard/>
              <PokemonCard/>
              <PokemonCard/>
              <PokemonCard/>
              <PokemonCard/>
              <PokemonCard/>
              <PokemonCard/>
              <PokemonCard/>
              <PokemonCard/>
           
          
        </ScrollView>
      
        </SafeAreaView>
    
      
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'100%',
  },
  
});
