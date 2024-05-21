import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';


import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="bounceIn" 
                    source={require('../../assets/logo.png')} 
                    style={{width:'100%'}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={500}animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.tittle}>Seja bem vindo ao Tudo +18, o melhor site de conteúdo adulto da internet.</Text>
                <Text style={styles.text}>Faça o Login para Conhecer!!</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonTexto}>Entrar</Text>
                </TouchableOpacity>
            </Animatable.View> 
           
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerLogo:{
        flex: 2,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForm:{
        flex: 1,
        backgroundColor: 'white',
        paddingStart: '10%',
        paddingEnd: '10%',
        alignItems: 'center',
    },
    tittle:{
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 10,
        color: 'black',
        marginBottom: 20,
    },
    text:{
        color: 'gray',
    },
    button:{
        position: 'absolute',
        backgroundColor: 'gray',
        borderRadius: 20,
        paddingVertical: 10,
        width: '60%',
        alignSelf: 'center',
        bottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    


});