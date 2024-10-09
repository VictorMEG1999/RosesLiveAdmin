import React from  'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView,
TouchableOpacity, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../styles/InicioUsuarioTabStyles';


const TabCerca = () => {
  return (
    <SafeAreaView style={styles.containerScroll}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.mensajeTexto}>Activa tu ubicación</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TabCerca;