import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from '../styles/InicioUsuarioTabStyles'; // Asegúrate de que este archivo contenga los estilos necesarios
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

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

const Opcion1 = () => {
  return (
    <SafeAreaView style={styles.containerScroll}>
      <ScrollView style={styles.scrollView}>
        <CuadrosCargando />
      </ScrollView>
    </SafeAreaView>
  );
};

const Opcion2 = () => {
  return (
    <View style={styles.tabContent}>
      <Text>Opción 2</Text>
    </View>
  );
};

const InicioUsuarioTab = () => {
  return (
    <View style={styles.container}>
      <Buscador />
      <Tab.Navigator>

        <Tab.Screen name="Cerca" component={Opcion1} />
        <Tab.Screen name="Descubrir" component={Opcion2} />


      </Tab.Navigator>
    </View>
  );
};

export default InicioUsuarioTab;
