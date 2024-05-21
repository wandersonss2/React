import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes/rotas.js'


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#87cefa" barStyle="dark-content"/>
      <Routes/>
    </NavigationContainer>
  );
}

