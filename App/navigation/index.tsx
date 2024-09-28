import React from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {LoginScreen} from"../screens/LoginScreen"
import {RegisUsua} from"../screens/RegistroUsuario"
import {RecupContra} from "../screens/RecuperacionContrasena"
import {VerificarCod} from "../screens/VerificarCod"
import {CambContra} from "../screens/CambiarContra"
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
        <Stack.Screen name= "CambContra" component= {CambContra} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
