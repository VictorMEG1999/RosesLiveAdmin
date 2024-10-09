import React from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {LoginScreen} from"../screens/LoginScreen"
import {RegisUsua} from"../screens/RegistroUsuario"
import {RecupContra} from "../screens/RecuperacionContrasena"
import {VerificarCod} from "../screens/VerificarCodigo"
import {CambContra} from "../screens/CambiarContrasena"
import {InicioUsuario} from "../screens/InicioUsuario"


import {Idiomas} from "../screens/Idiomas"
import {ConfiguracionUsuario} from "../screens/ConfiguracionUsuario"


import {MensajesScreen} from "../screens/MensajesScreen"
import {NotificacionesScreen} from "../screens/NotificacionesScreen"
import {MonederoScreen} from "../screens/MonederoScreen"
import {NivelScreen} from "../screens/NivelScreen"
import {InvitacionesScreen} from "../screens/InvitacionesScreen"
import {GaleriaScreen} from "../screens/GaleriaScreen"
import {VerificacionUsuario} from "../screens/VerificacionUsuario"


//import CountainerRoutes from './App/navigation';



const Stack = createNativeStackNavigator();


export function napUser() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name= "RegisUsua" component= {RegisUsua} />
        <Stack.Screen name= "RecupContra" component= {RecupContra} />
        <Stack.Screen name= "VerificarCod" component= {VerificarCod} />
        <Stack.Screen name= "CambContrasena" component= {CambContra} />
        <Stack.Screen name= "InicioUsuario" component= {InicioUsuario} options={{ headerShown: false }} />

            {/* separar cuando se incia sesión */}
         <Stack.Screen name="Idiomas" component={Idiomas} />
          <Stack.Screen name="ConfiguracionUsuario" component={ConfiguracionUsuario} />
          <Stack.Screen name="MensajesScreen" component={MensajesScreen} />
            <Stack.Screen name="NotificacionesScreen" component={NotificacionesScreen} />
            <Stack.Screen name="MonederoScreen" component={MonederoScreen} />
            <Stack.Screen name="NivelScreen" component={NivelScreen} />
            <Stack.Screen name="InvitacionesScreen" component={InvitacionesScreen} />
            <Stack.Screen name="GaleriaScreen" component={GaleriaScreen} />
            <Stack.Screen name="VerificacionUsuario" component={VerificacionUsuario} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
