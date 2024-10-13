import React from  'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView,
TouchableOpacity, Alert } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import styles from '../styles/InicioUsuarioTabStyles';
import { useNavigation } from '@react-navigation/native';

import HeaderUsuario from './HeaderUsuario';
import TabCerca from './TabCerca';
import TabLive from './TabLive';
import TabSeguidos from './TabSeguidos';


const Tab = createMaterialTopTabNavigator();

const InicioUsuarioTab = () => {
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
        <Tab.Screen name="Live" component={TabLive} />
        <Tab.Screen name="Seguidos" component={TabSeguidos} />
      </Tab.Navigator>
    </View>
  );
};

export default InicioUsuarioTab;
