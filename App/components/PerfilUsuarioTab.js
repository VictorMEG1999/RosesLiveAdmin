import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Center, Button, HStack, Icon, Text, Divider, NativeBaseProvider, Box } from 'native-base';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "react-navigation-stack"
import styles from '../styles/PerfilUsuarioTabStyles';


const { width, height } = Dimensions.get('window');



export function PerfilUsuarioTab({ navigation }) {


  const menuItems = [
    { name: "Mensajes", icon: <AntDesign name="message1" style={styles.icons}/>, screen: "MensajesScreen"},
    { name: "Notificaciones", icon: <Ionicons name="notifications-outline" style={styles.icons}/>, screen: "NotificacionesScreen" },
    { name: "Monedero", icon: <SimpleLineIcons name="wallet" style={styles.icons}/>, screen: "MonederoScreen" },
    { name: "Mi Nivel", icon: <MaterialIcons name="star-border" style={styles.icons}/>, screen: "NivelScreen" },
    { name: "Mis Invitaciones", icon: <Octicons name="people" style={styles.icons}/>, screen: "InvitacionesScreen" },
    { name: "Galeria", icon: <FontAwesome name="photo" style={styles.icons}/>, screen: "GaleriaScreen" },
  ];

  return (
    <NativeBaseProvider>

      <View style={styles.header}>
                             <TouchableOpacity onPress={() => navigation.navigate('ConfiguracionUsuario')}>
                             <Ionicons name="menu" size={24} style={styles.menuIco}/>
                              </TouchableOpacity>
      </View>

      <Center>
        <Box
          size={120}
          bgColor="gray.200"
          borderRadius="full"         
        />

        <Center><Text bold top={2}>#usuario</Text></Center>
             <HStack space={"16"} justifyContent="center" marginTop={5}>
              <Center><Text bold>Pais</Text></Center>
              <Center><Text bold>Idioma</Text></Center>
            </HStack>

            <HStack space={"10"} justifyContent="center" marginTop={4}>
              <Center><Text bold>#amigos</Text></Center>
              <Center><Text bold>#seguidores</Text></Center>
              <Center><Text bold>#siguiendo</Text></Center>
            </HStack>

      </Center>

      <Divider w="100%" bg="pink.500" marginTop={7} />


      <Box alignItems="flex-start"  px={8} marginTop={4}>
        {menuItems.map((item, index) => (
          <HStack key={index} mt={"1%"}>
            {item.icon}
            <Button variant="unstyled" onPress={() => navigation.navigate(item.screen)}>
              {item.name}
            </Button>
          </HStack>
        ))}

      </Box>


      <Box alignItems="flex-start" marginTop={1}>
        <Button style={styles.buttonv} onPress={() => navigation.navigate('VerificacionUsuario')}>
          Verificar
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}

export default PerfilUsuarioTab;