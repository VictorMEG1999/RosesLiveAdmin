import React from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen} from"../screens/Login"
import {registro_usuario} from"../screens/RegistroUsuario"
//import CountainerRoutes from './App/navigation';



const Stack = createNativeStackNavigator();

export function napUser() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name= "registro_usuario" component= {registro_usuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
