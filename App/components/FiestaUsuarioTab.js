import React from  'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView,
TouchableOpacity, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../styles/InicioUsuarioTabStyles';
import HeaderUsuario from './HeaderUsuario';
import TabSeguidos from './TabSeguidos';
import TabCerca from './TabCerca';
import TabJuegos from './TabJuegos';

const Tab = createMaterialTopTabNavigator();


const FiestaUsuarioTab = () => {
  return (
    <View style={styles.container}>
      <HeaderUsuario />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIndicatorStyle: styles.tabIndicator,
          tabBarActiveTintColor: '#E01983',
          tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Cerca" component={TabCerca} />
        <Tab.Screen name="Juegos" component={TabJuegos} />
        <Tab.Screen name="Seguidos" component={TabSeguidos} />
      </Tab.Navigator>
    </View>
  );
};

export default FiestaUsuarioTab;