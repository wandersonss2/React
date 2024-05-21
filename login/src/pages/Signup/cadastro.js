import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import axios from 'axios';
import * as Animatable from 'react-native-animatable';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submit() {
    const userData = {
      name: name,
      email: email,
      password: password,
    };
    axios.post('http://10.0.2.2:3000/register', userData)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Animatable.View animation='fadeInRight' delay={600} style={styles.containerHeader}>
          <Text style={styles.message}>Crie sua conta!</Text>
        </Animatable.View>
        
        <Animatable.View animation='fadeInUp' delay={500} style={styles.containerForm}>
          <Text style={styles.title}>Nome</Text>
          <TextInput
            placeholder='Digite seu nome'
            style={styles.input}
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.title}>E-mail</Text>
          <TextInput
            placeholder='Digite seu e-mail'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
            
          <Text style={styles.title}>Senha</Text>
          <TextInput
            placeholder='Digite sua senha'
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
            
          <TouchableOpacity style={styles.button} onPress={submit}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    flexGrow: 1,
  },
  containerHeader: {
    alignItems: 'center',
  },
  message: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    padding: 40,    
  },
  containerForm: {
    backgroundColor: 'black',
    paddingStart: '10%',
    paddingEnd: '10%',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 15,
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 7,
    padding: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    borderRadius: 7,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
