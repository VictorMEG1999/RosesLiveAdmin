import React from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {LoginScreen} from"../screens/LoginScreen"
import {RegisUsua} from"../screens/RegistroUsuario"
import {RecupContra} from "../screens/RecuperacionContrasena"
import {VerificarCod} from "../screens/VerificarCodigo"
import {CambContra} from "../screens/CambiarContrasena"
import {InicioUsuario} from "../screens/InicioUsuario"


//import CountainerRoutes from './App/navigation';



const Stack = createNativeStackNavigator();

export function napUser() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name= "RegisUsua" component= {RegisUsua} />
        <Stack.Screen name= "RecupContra" component= {RecupContra} />
        <Stack.Screen name= "VerificarCod" component= {VerificarCod} />
        <Stack.Screen name= "CambContrasena" component= {CambContra} />
        <Stack.Screen name= "InicioUsuario" component= {InicioUsuario} options={{ headerShown: false }}/*options={{ headerShown: false }}*//>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
