import React from  'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView,
TouchableOpacity, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../styles/InicioUsuarioTabStyles';

const TabLive = () => {
  return (
    <SafeAreaView style={styles.containerScroll}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
         <Text style={styles.mensajeTexto}>No se puede cargar</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TabLive;