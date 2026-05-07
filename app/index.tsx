import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Cadastro from './cadastro';     
import ListaAnimais from './ListaAnimais';


export interface Animal {
  id: string;
  nome: string;
  especie: string;
  idade: string;
}

const Index = () => {

  const [lista, setLista] = useState<Animal[]>([]);


  const adicionarAnimal = (novoAnimal: Animal) => {
    setLista((listaAtual) => [...listaAtual, novoAnimal]);
  };


  const excluirAnimal = (id: string) => {
    setLista((listaAtual) => listaAtual.filter(animal => animal.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tituloApp}>BICHOS</Text>
      </View>
      

      <Cadastro aoEnviar={adicionarAnimal} />
      
      <View style={{ flex: 1 }}>
        <ListaAnimais animais={lista} aoExcluir={excluirAnimal} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tituloApp: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Index;