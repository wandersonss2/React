import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Modelosp() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInRight" delay={600} style={styles.containerHeader}>
                <Text style={styles.message}>Seleciona a opção desejada!</Text>
            </Animatable.View>
            
            <Animatable.View animation="fadeInUp" delay={500} style={styles.containerForm}>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastromodelo')}>
                    <Text style={styles.buttonText}>Cadastrar Modelo</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Mostrarmodelo')}>
                    <Text style={styles.buttonText}>Mostrar todas as modelos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TodoH')}>
                    <Text style={styles.buttonText}>To-Do List</Text>
                </TouchableOpacity>
                
            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    containerHeader: {
        marginTop: '60%',
        alignItems: 'center',
    },
    message: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        padding: 40,
    },
    containerForm: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginTop: 20,
    },
    input: {
        borderBottomWidth: 3,
        height: 40,
        marginBottom: 20,
        fontSize: 16,
    },
    button: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    buttonRegistro: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonRegister: {
        color: 'white',
        fontSize: 18,
    },
});
