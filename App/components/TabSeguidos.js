import React from  'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView,
TouchableOpacity, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../styles/InicioUsuarioTabStyles';

const TabSeguidos = () => {
  return (
    <SafeAreaView style={styles.containerScroll}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
         <Text style={styles.mensajeTexto}>Aún no sigues a nadie xd</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TabSeguidos;