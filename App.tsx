import React, { useState } from 'react';
import { MaskedTextInput } from 'react-native-mask-text';
import {Text, View, StyleSheet, TextInput, Pressable,  } from 'react-native';

// imports para navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import { Catalogo } from './Telas/Catalogo';
import { Cadastro } from './Telas/Cadastro';
import { Login } from './Telas/Login';
import { DetalhesProduto } from './Telas/DetalhesProduto';

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Cadastro" >
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Catalogo" component={Catalogo} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DetalhesProduto" component={DetalhesProduto} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;
