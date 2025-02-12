import React from  'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView,
TouchableOpacity, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../styles/UsuariosTabStyles';
import { useNavigation } from '@react-navigation/native';

import HeaderUsuario from './HeaderUsuario';
import TopUsuariosActivos from './TopUsuariosActivos';
import TopAgentesActivos from './TopAgentesActivos';
import TopAdmin from './TopAdmin';


const Tab = createMaterialTopTabNavigator();

const UsuariosTab = () => {
  return (
    <View style={styles.container}>
     <HeaderUsuario />
      <Tab.Navigator
         screenOptions={{
         tabBarStyle: styles.tabBar,
         tabBarLabelStyle: styles.tabBarLabel,
         tabBarIndicatorStyle: styles.tabIndicator,
         tabBarActiveTintColor: '#1087e3',
         tabBarInactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Usuarios Activos" component={TopUsuariosActivos} />
        <Tab.Screen name="Agentes Activos" component={TopAgentesActivos} />
        <Tab.Screen name="Admin" component={TopAdmin} />
      </Tab.Navigator>
    </View>
  );
};

export default UsuariosTab;