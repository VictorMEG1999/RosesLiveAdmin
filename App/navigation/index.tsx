import React from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen} from"../screens/LoginScreen"
import {RegisUsua} from"../screens/RegisUsua"
import {RecupContra} from "../screens/RecupContra"
import {CodiContra} from "../screens/CodiContra"
import {CambContra} from "../screens/CambContra"
//import CountainerRoutes from './App/navigation';



const Stack = createNativeStackNavigator();

export function napUser() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name= "RegisUsua" component= {RegisUsua} />
        <Stack.Screen name= "RecupContra" component= {RecupContra} />
        <Stack.Screen name= "CodiContra" component= {CodiContra} />
        <Stack.Screen name= "CambContra" component= {CambContra} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
