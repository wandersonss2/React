import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

const CadastroForm = ({}) => {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [preco, setPreco] = useState('');
  
  async function submit() {
    const modeloData = {
      name: nome,
      genero: genero,
      localizacao: localizacao,
      preco: parseFloat(preco),
    };
    const token = await SecureStore.getItemAsync('authenticationToken');
    const headers = {
      Authorization: `Bearer ${token}`
    };
    axios.post('http://10.0.2.2:3000/modelo/cadastraModelo', modeloData, { headers })
    .then(res => console.log(res.data)) 
    .catch(err => console.log(err));
}
  const navigation = useNavigation();
  return (
    
    <View style={styles.container}>
       <Text style={styles.title}>Cadastro de Modelos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Gênero"
        value={genero}
        onChangeText={setGenero}
      />
      <TextInput
        style={styles.input}
        placeholder="Localização"
        value={localizacao}
        onChangeText={setLocalizacao}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button title="Cadastrar" onPress={submit} color="red" />
        <View style={styles.buttonSpacer} />
        <Button title="Voltar" onPress={() => navigation.navigate('Modelos')} color="red" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', 
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#fff', 
    borderRadius: 5,
    color: '#000', 
    width: '100%', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default CadastroForm;
