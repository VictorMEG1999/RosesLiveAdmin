import React from  'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView,
TouchableOpacity, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../styles/UsuariosTabStyles';
import { useNavigation } from '@react-navigation/native';

import HeaderUsuario from './HeaderUsuario';
import LivesActivosTop from './LivesActivosTop';
import TopAgentesActivos from './TopAgentesActivos';


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
        <Tab.Screen name="Lives Activos" component={LivesActivosTop} />
        <Tab.Screen name="Historial de Lives" component={TopAgentesActivos} />
      </Tab.Navigator>
    </View>
  );
};

export default UsuariosTab;