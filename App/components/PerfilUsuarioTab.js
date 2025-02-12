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
import  UsuarioContex from "../context/usuario/usuarioContex";
import { useContext } from "react";


const { width, height } = Dimensions.get('window');



export function PerfilUsuarioTab({navigation}) {

  // infromacion de usuarios
  const { getUsuario } = useContext(UsuarioContex)

  const usuario = getUsuario()
  const fotoUsuario = usuario.state.usuario.fotoUsuario;
  const nombreUsuario = usuario.state.usuario.nombre;
  const pais  =  "mexico" // hacer consulta 
  const idioma  =  "Español" // hacer consulta 
  const nummeroAmigo  =  0 // hacer consulta 
  const nummeroSeguidores  =  0 // hacer consulta 
  const nummeroSeguidos  =  0 // hacer consulta 


  
  // console.log("b" +state );
  
  const menuItems = [
    { name: "Mensajes", icon: <AntDesign name="message1" style={styles.icons}/>, screen: "MensajesScreen"},
    { name: "Notificaciones", icon: <Ionicons name="notifications-outline" style={styles.icons}/>, screen: "NotificacionesScreen" },
    { name: "Monedero", icon: <SimpleLineIcons name="wallet" style={styles.icons}/>, screen: "MonederoScreen" },
    { name: "Top", icon: <MaterialIcons name="star-border" style={styles.icons}/>, screen: "NivelScreen" },
    { name: "Usuarios Activos", icon: <Octicons name="people" style={styles.icons}/>, screen: "InvitacionesScreen" },

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
          bgColor="#1087e3"
          borderRadius="full"         
        />
        {/* fotoUsuario ruta de imagen */}
        <>{fotoUsuario}</>
        <Center><Text bold top={2}>{nombreUsuario}</Text></Center>
             <HStack space={"16"} justifyContent="center" marginTop={5}>
              <Center><Text bold>{pais}</Text></Center>
              <Center><Text bold>{idioma}</Text></Center>
            </HStack>

            <HStack space={"10"} justifyContent="center" marginTop={4}>
              <Center><Text bold>Amigos: {nummeroAmigo}</Text></Center>
              <Center><Text bold>Seguidores: { nummeroSeguidores }</Text></Center>
              <Center><Text bold>Siguiendo: { nummeroSeguidos }</Text></Center>
            </HStack>

      </Center>

      <Divider w="100%" bg="#1087e3" marginTop={7} />


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