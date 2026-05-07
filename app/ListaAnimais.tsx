import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Animal } from './index';

interface ListaProps {
  animais: Animal[];
  aoExcluir: (id: string) => void;
}

const ListaAnimais: React.FC<ListaProps> = ({ animais, aoExcluir }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={animais}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.nomeText}>{item.nome}</Text>
              <Text>{item.especie} • {item.idade} anos</Text>
            </View>
            <TouchableOpacity onPress={() => aoExcluir(item.id)} style={styles.btnExcluir}>
              <Text style={{color: 'white'}}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: '#eee', marginBottom: 10, borderRadius: 8 },
  nomeText: { fontWeight: 'bold' },
  btnExcluir: { backgroundColor: 'red', padding: 10, borderRadius: 5 }
});

export default ListaAnimais;