import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, AsyncStorage  } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    async function submit() {
        const userData = {
          email: email,
          password: password,
        };
        
        try {
          const response = await axios.post('http://10.0.2.2:3000/login', userData);
          const token = response.data.data.token;
          try {
            await SecureStore.setItemAsync('authenticationToken', token);
            console.log('Token saved securely.');
          } catch (error) {
            console.error('Error saving token:', error);
          }
          
          navigation.navigate('Modelos')
        } catch (error) {
          console.error('Error:', error);
        }
      }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Animatable.Text animation="fadeInRight" delay={600} style={styles.message}>Bem vindo!</Animatable.Text>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={styles.containerForm}
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : -150} 
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Animatable.View animation="fadeInUp" delay={500}>
                        <Text style={styles.title}>E-mail</Text>
                        <TextInput
                            placeholder='Digite seu e-mail'
                            style={styles.input}
                            value = {email}
                            onChangeText={setEmail} />
                        <Text style={styles.title}>Senha</Text>
                        <TextInput
                            placeholder='Digite sua senha'
                            style={styles.input}
                            secureTextEntry={true}
                            value = {password}
                            onChangeText={setPassword} />
                        <TouchableOpacity style={styles.button} onPress={() => submit()}>
                            <Text style={styles.buttonText}>Entrar+18</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRegistro} onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.buttonRegister}>Crie sua conta</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        backgroundColor: 'black',
    },
    containerHeader: {
        flex: 1,
        alignItems: 'center',
    },
    message: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        padding: 40,
    },
    containerForm: {
        flex: 2,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title: {
        fontSize: 20,
        marginTop: 20,
        alignSelf: 'center',
    },
    input: {
        borderBottomWidth: 3,
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',    
    },
    buttonRegistro: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
        alignSelf: 'center',
    },
    buttonRegister: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center', 
    }
});
