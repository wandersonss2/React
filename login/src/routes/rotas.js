import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Welcome/home";
import Login from "../pages/Signin/login";
import Register from "../pages/Signup/cadastro";
import Modelos from "../pages/Modelos/modelos";
import CadastroModelo from "../pages/Modelos/cadmodelo";
import StatusModelo from "../pages/Modelos/statusmodelo";
import MostraModelo from "../pages/Modelos/mostrarmodelo";
import TodoH from "../pages/Todo/TodoHome";


const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Bem vindo" 
                component={Home}
                options={{headerShown: false}} 
            />           

            <Stack.Screen
                name="Login" 
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Register" 
                component={Register}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Modelos" 
                component={Modelos}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Cadastromodelo" 
                component={CadastroModelo}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Statusmodelo" 
                component={StatusModelo}
                options={{headerShown: false}}  
            />
            <Stack.Screen
                name="Mostrarmodelo" 
                component={MostraModelo}
                options={{headerShown: false}}  
            />
            
            <Stack.Screen
                name="TodoH" 
                component={TodoH}
                options={{headerShown: false}}
            />

        </Stack.Navigator>   
    )
}