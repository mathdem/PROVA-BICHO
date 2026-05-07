import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { Animal } from './index'; 
interface CadastroProps {
  aoEnviar: (animal: Animal) => void;
}

const Cadastro: React.FC<CadastroProps> = ({ aoEnviar }) => {
  const [nome, setNome] = useState<string>("");
  const [especie, setEspecie] = useState<string>("");
  const [idade, setIdade] = useState<string>("");

  const handleEnviar = () => {
    if (!nome || !especie || !idade) {
      Alert.alert("Erro", "Preencha tudo!");
      return;
    }

    const novoAnimal: Animal = {
      id: Date.now().toString(),
      nome,
      especie,
      idade
    };

    aoEnviar(novoAnimal);
    setNome(""); setEspecie(""); setIdade("");
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={styles.input} />
      <TextInput placeholder="Espécie" value={especie} onChangeText={setEspecie} style={styles.input} />
      <TextInput placeholder="Idade" value={idade} onChangeText={setIdade} keyboardType="numeric" style={styles.input} />
      <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
        <Text style={styles.textoBotao}>Enviar Animal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginVertical: 5, borderRadius: 5 },
  botao: { backgroundColor: '#9e3e79', padding: 15, borderRadius: 5, alignItems: 'center' },
  textoBotao: { color: '#fff', fontWeight: 'bold' }
});

export default Cadastro;