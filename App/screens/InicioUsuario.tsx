import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InicioUsuarioTab from '../components/InicioUsuarioTab';
import FiestaUsuarioTab from '../components/FiestaUsuarioTab';
import LiveUsuarioTab from '../components/LiveUsuarioTab';
import TopUsuarioTab from '../components/TopUsuarioTab';
import PerfilUsuarioTab from '../components/PerfilUsuarioTab';
import { NativeBaseProvider} from 'native-base';

const Tab = createBottomTabNavigator();

export const InicioUsuario = () => {
  return (
     <NativeBaseProvider>

     <Tab.Navigator
           screenOptions={({ route }) => ({
             tabBarIcon: ({ color, size }) => {
               let iconName;
               if (route.name === 'Inicio') {
                 iconName = 'home-outline';
               } else if (route.name === 'Fiesta') {
                 iconName = 'beer-outline';
               } else if (route.name === 'Live') {
                 iconName = 'videocam-outline';
               } else if (route.name === 'Top') {
                 iconName = 'trophy-outline';
               } else if (route.name === 'Perfil') {
                 iconName = 'person-outline';
               }
               return <Ionicons name={iconName} size={size} color={color} />;
             },
             tabBarActiveTintColor: 'tomato',
             tabBarInactiveTintColor: 'gray',
           })}
         >
           <Tab.Screen name="Inicio" component={InicioUsuarioTab} />
           <Tab.Screen name="Fiesta" component={InicioUsuarioTab} />
           <Tab.Screen name="Live" component={LiveUsuarioTab} />
           <Tab.Screen name="Top" component={TopUsuarioTab} />
           <Tab.Screen name="Perfil" component={PerfilUsuarioTab} />
         </Tab.Navigator>



     </NativeBaseProvider>


  );
};

export default InicioUsuario;


