import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const EditModeloPage = ({ route, navigation }) => {
  const { modeloId } = route.params;
  const [modelo, setModelo] = useState({ nome: '', genero: '', localizacao: '', preco: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchModelo();
  }, []); 

  const fetchModelo = async () => {
    try {
      const response = await axios.get(`http://10.0.2.2:3000/modelo/pegaModelo/${modeloId}`);
      const data = response.data;
      setModelo(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Erro ao buscar modelo:', error);
      setIsLoading(false);
    }
  };

  const handleEditChange = (field, value) => {
    setModelo(prevState => ({ ...prevState, [field]: value }));
 
  };

  const handleEditSubmit = async () => {
    try {
      await axios.put(`http://10.0.2.2:3000/modelo/atualizaModelo/${modeloId}`, modelo);
      navigation.goBack(); 
    } catch (error) {
      console.error('Erro ao editar modelo:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao editar o modelo. Por favor, tente novamente.');
    }
  };

  if (isLoading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, styles.blackBackground]}>
      <TextInput
        placeholder="Nome"
        style={[styles.input, styles.whiteBackground]}
        value={modelo.name}
        onChangeText={(text) => handleEditChange('nam e', text)}
      />
      <TextInput
        placeholder="Gênero"
        style={[styles.input, styles.whiteBackground]}
        value={modelo.genero}
        onChangeText={(text) => handleEditChange('genero', text)}
      />
      <TextInput
        placeholder="Localização"
        style={[styles.input, styles.whiteBackground]}
        value={modelo.localizacao}
        onChangeText={(text) => handleEditChange('localizacao', text)}
      />
      <TextInput
        placeholder="Preço"
        style={[styles.input, styles.whiteBackground]}
        value={modelo.preco.toString()}
        onChangeText={(text) => handleEditChange('preco', text)}
        keyboardType="numeric"
      />
      <Button title="Salvar" onPress={handleEditSubmit} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  blackBackground: {
    backgroundColor: 'black',
  },
  whiteBackground: {
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditModeloPage;
