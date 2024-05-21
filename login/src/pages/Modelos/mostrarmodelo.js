import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Button } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; 
import * as SecureStore from 'expo-secure-store';

const ModelosPage = () => {
  const [modelos, setModelos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation(); 

  useEffect(() => {
    fetchModelos();
  }, []);

  async function fetchModelos() {
      try {
        const token = await SecureStore.getItemAsync('authenticationToken');
        const headers = {
          Authorization: `Bearer ${token}`
        };
        const response = await axios.get('http://10.0.2.2:3000/modelo/pegaTodasModelos', { headers });
        setModelos(response.data.map(modelo => ({
        _id: modelo._id,
        genero: modelo.genero,
        nome: modelo.name,
        localizacao: modelo.localizacao,
        preco: modelo.preco
      })));
      setIsLoading(false);
      
      
    } catch (error) {
      console.error('Erro ao buscar modelos:', error);
      setIsLoading(false);
    }
  };

  const deleteModelo = async (id) => {
    try {
      await axios.delete(`http://10.0.2.2:3000/modelo/deleteModelo/${id}`);
      fetchModelos(); 
    } catch (error) {
      console.error('Erro ao excluir modelo:', error);
    }
  };

  const editModelo = (id) => {
    
    navigation.navigate('Statusmodelo', { modeloId: id });
  };
  
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.infoContainer}>
        <Text>Nome: {item.nome}</Text>
        <Text>Gênero: {item.genero}</Text>
        <Text>Localização: {item.localizacao}</Text>
        <Text>Preço: {item.preco}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        
        <TouchableOpacity onPress={() => editModelo(item._id)} style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteModelo(item._id)} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
    <Button 
      title="Voltar" 
      onPress={() => navigation.navigate('Modelos')} 
      style={styles.backButton} 
      color="red"
    />
      <Text style={styles.title}>Modelos Cadastradas</Text>
      <FlatList
        data={modelos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginBottom: 20,
  },
  item: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
  },
  infoContainer: {
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
    marginLeft: 10,
  },
  deleteButtonText: {
    color: 'white',
  },
  editButton: {
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 3,
    alignItems: 'center',
  },
  editButtonText: {
    color: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
  backButtonText: {
    color: 'white',
  },
});

export default ModelosPage;
