import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../styles/InicioUsuarioTabStyles'; // Asegúrate de que este archivo contenga los estilos necesarios
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LiveScreen from './LiveScreen';

const Tab = createMaterialTopTabNavigator();

const Buscador = () => {
  return (
    <View style={styles.containerBuscador}>
      <View style={styles.inputContainer}>
        <Fontisto name="world" size={24} style={styles.icon} />
        <TextInput style={styles.buscador} placeholder="Buscar..." placeholderTextColor="#888" />
      </View>
      <View style={styles.viewFiltro}>
        <FontAwesome name="filter" size={30} style={styles.icon} />
      </View>
      <View style={styles.menu}>
        <Text style={styles.menuText}>Menu aquí</Text>
      </View>
    </View>
  );
};

const CuadroCargando = () => {
  return <View style={styles.cuadroCargando} />;
};

const CuadrosCargando = () => {
  const cuadros = Array.from({ length: 30 });

  return (
    <View style={styles.containerCuadro}>
      {cuadros.map((_, index) => (
        <CuadroCargando key={index} />
      ))}
    </View>
  );
};

const Cerca = () => {
  return (
    <SafeAreaView style={styles.containerScroll}>
          <ScrollView style={styles.scrollView}>
            <CuadrosCargando />
          </ScrollView>
        </SafeAreaView>
  );
};

const Live = () => {
  return (
    <SafeAreaView style={styles.containerScroll}>
      <ScrollView style={styles.scrollView}>
        <CuadrosCargando />
      </ScrollView>
    </SafeAreaView>
  );
};

const Seguidos = () => {
  return (
    <SafeAreaView style={styles.containerScroll}>
      <ScrollView style={styles.scrollView}>
        <CuadrosCargando />
      </ScrollView>
    </SafeAreaView>
  );
};

const InicioUsuarioTab = () => {
  return (
    <View style={styles.container}>
      <Buscador />
      <Tab.Navigator
         screenOptions={{
         tabBarStyle: styles.tabBar,
         tabBarLabelStyle: styles.tabBarLabel,
         tabBarIndicatorStyle: styles.tabIndicator,
         tabBarActiveTintColor: '#E01983',
         tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Cerca" component={Cerca} />
        <Tab.Screen name="Live" component={Live} />
        <Tab.Screen name="Seguidos" component={Seguidos} />
      </Tab.Navigator>
    </View>
  );
};

export default InicioUsuarioTab;
