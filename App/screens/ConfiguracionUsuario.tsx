import React from 'react';
import { View, Text} from 'react-native';
import styles from '../styles/ConfiguracionUsu';
import { NativeBaseProvider, ScrollView, Divider } from 'native-base';
import { Title } from '../screens/Title';
import { MenuItem } from './MenuItem';


export const Cuenta=[
{
  name: 'Cuenta y seguridad',
  Component: 'cuentayseguridadScreen',
},

{
  name: 'Compartir perfil',
  Component: 'ompartirPerfil',
},
{
  name: 'Privacidad',
  Component: 'Privacidad',
},
{
  name: 'Datos Personales',
  Component: 'DatosPersonales',
},
]

export const preferencias=[
{
  name: 'Volverme Agente',
  Component: 'VolvermeAgente',
},
{
  name: 'Idioma y región',
  Component: 'IdiomayRegion',
},
]
export const ayuda=[
{
  name: 'Informar de un problema',
  Component: 'InformarProblema',
},

{
  name: 'Política de privacidad',
  Component: 'PoliticaPrivacidad',
},

{
  name: 'Términos y Condiciones',
  Component: 'TerminosCondiciones',
},

{
  name: 'Normas Comunitarias',
  Component: 'NormasComunitarias',
},
]

export const Inicio=[
{
  name: 'Sesion',
  Component: 'Sesion',
},

{
  name: 'Cerrar Sesion',
  Component: 'CerrarSesion',
},
]

export const ConfiguracionUsuario = () => {
  return (
    <NativeBaseProvider>
    <View style={styles.mainContainer}>
      <View style={styles.globalMargin}>
        <ScrollView>
        <Divider w="100%" bg="pink.500" marginTop={10} />
        <Title  text='Cuenta' safe/>
        <View style={{marginTop: 5}}/>
            {
            Cuenta.map( item => (
             <MenuItem key={item.Component} {...item}/>
          ))
          }
          <View style={{marginTop: 10}}/>
          <Divider w="100%" bg="pink.500"/>
          <Title text='Preferencias' safe/>
          <View style={{marginTop: 5}}/>
            {
            preferencias.map( item => (
             <MenuItem key={item.Component} {...item}/>
          ))
          }
          <View style={{marginTop: 10}}/>
          <Divider w="100%" bg="pink.500"/>
          <Title text='Ayuda e Información' safe/>
          <View style={{marginTop: 5}}/>
            {
            ayuda.map( item => (
             <MenuItem key={item.Component} {...item}/>
          ))
          }
          <View style={{marginTop: 10}}/>
          <Divider w="100%" bg="pink.500"/>
          <Title text='Inicio de Sesión' safe/>
          <View style={{marginTop: 5}}/>
            {
            Inicio.map( item => (
             <MenuItem key={item.Component} {...item}/>
          ))
          }
          <View style={{marginTop: 10}}/>

        </ScrollView>
      </View>
      </View>
    </NativeBaseProvider>
  );
};

export default ConfiguracionUsuario;
