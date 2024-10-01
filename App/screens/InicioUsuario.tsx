import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InicioUsuarioTab from '../components/InicioUsuarioTab';
import FiestaUsuarioTab from '../components/FiestaUsuarioTab';
import LiveUsuarioTab from '../components/LiveUsuarioTab';
import TopUsuarioTab from '../components/TopUsuarioTab';
import PerfilUsuarioTab from '../components/PerfilUsuarioTab';
import { NativeBaseProvider} from 'native-base';
import styles from '../styles/InicioUsuarioStyles';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

export const InicioUsuario = () => {
  return (
     <NativeBaseProvider>

     <Tab.Navigator
           screenOptions={({ route }) => ({
             tabBarIcon: ({ color, size }) => {
               let iconName;
                switch (route.name) {
                             case 'Inicio':
                               iconName = 'home-outline';
                               break;
                             case 'Fiesta':
                               iconName = 'beer-outline';
                               break;
                             case 'Live':
                               iconName = 'videocam-outline';
                               break;
                             case 'Top':
                               iconName = 'trophy-outline';
                               break;
                             case 'Perfil':
                               iconName = 'person-outline';
                               break;
                             default:
                               iconName = 'home-outline';
                           }
               return <Ionicons name={iconName} size={size} color={color} />;
             },
             tabBarActiveTintColor: styles.tabBarActiveTintColor.color,
             tabBarInactiveTintColor: styles.tabBarInactiveTintColor.color,
             tabBarActiveBackgroundColor: styles.tabBarActiveBackgroundColor.color,
             tabBarStyle: styles.tabBarStyle,
             tabBarLabelStyle: styles.tabBarLabelStyle,
             tabBarIconStyle: styles.tabBarIconStyle,
           })}
         >
           <Tab.Screen name="Inicio" component={InicioUsuarioTab} options={{ headerShown: false }}/>
           <Tab.Screen name="Fiesta" component={FiestaUsuarioTab} options={{ headerShown: false }}/>
           <Tab.Screen name="Live" component={LiveUsuarioTab} options={{ headerShown: false }}/>
           <Tab.Screen name="Top" component={TopUsuarioTab} options={{ headerShown: false }}/>
           <Tab.Screen name="Perfil" component={PerfilUsuarioTab} options={{ headerShown: false }}/>
         </Tab.Navigator>



     </NativeBaseProvider>


  );
};

export default InicioUsuario;


