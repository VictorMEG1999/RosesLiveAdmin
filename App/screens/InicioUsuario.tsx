import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import UsuariosTab from '../components/UsuariosTab';
import LivesTab from '../components/LivesTab';
import VentasTab from '../components/VentasTab';
import ReportesTab from '../components/ReportesTab';
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
                             case 'Usuarios':
                               iconName = 'accessibility';
                               break;
                             case 'Lives':
                               iconName = 'albums';
                               break;
                             case 'Ventas':
                               iconName = 'analytics';
                               break;
                             case 'Reportes':
                               iconName = 'bar-chart';
                               break;
                             case 'Perfil':
                               iconName = 'person';
                               break;
                             default:
                               iconName = 'home';
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
           <Tab.Screen name="Usuarios" component={UsuariosTab} options={{ headerShown: false }}/>
           <Tab.Screen name="Lives" component={LivesTab} options={{ headerShown: false }}/>
           <Tab.Screen name="Ventas" component={VentasTab} options={{ headerShown: false }}/>
           <Tab.Screen name="Reportes" component={ReportesTab} options={{ headerShown: false }}/>
           <Tab.Screen name="Perfil" component={PerfilUsuarioTab} options={{ headerShown: false }}/>
         </Tab.Navigator>



     </NativeBaseProvider>


  );
};

export default InicioUsuario;


