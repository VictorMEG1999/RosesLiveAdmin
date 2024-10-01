import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Center, Button, HStack, Text, Divider, NativeBaseProvider, Box } from 'native-base';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function PerfilUsuarioTab({navigation}) {

    const menuUsuario = [ 
    { name: "Mensajes", icon: <MaterialIcons name="message" size={20} color="green" marginTop={11} />, screen: "MensajesScreen" },
    { name: "Notificaciones", icon: <Ionicons name="notifications" size={20} color="blue" marginTop={9}/>, screen: "NotificacionesScreen" },
    { name: "Monedero", icon: <AntDesign name="wallet" size={20} color="purple" marginTop={9}/>, screen: "MonederoScreen" },
    { name: "Mi Nivel", icon: <MaterialIcons name="star" size={20} color="gold" marginTop={9}/>, screen: "NivelScreen" },
    { name: "Mis Invitaciones", icon: <Ionicons name="people" size={20} color="orange" marginTop/>, screen: "InvitacionesScreen" },
    { name: "Galeria", icon: <MaterialIcons name="photo-library" size={20} color="red" />, screen: "GaleriaScreen" },
    ] 

  return (
    <NativeBaseProvider>
      <Center>
        <Box
          size={120}
          bgColor="gray.200"
          borderRadius="full"         
        />
      </Center>

      <Center><Text bold>#usuario</Text></Center>   
     <HStack space={3} justifyContent="center" marginTop={2}>
      <Center><Text bold right={6}>Pais</Text></Center>
      <Center><Text bold left={35}>Idioma</Text></Center>
    </HStack>

    <HStack space={3} justifyContent="center" marginTop={3}>
      <Center><Text bold right={5}>#amigos</Text></Center>
      <Center><Text bold left={2}>#seguidores</Text></Center>
      <Center><Text bold left={6}>#siguiendo</Text></Center>
    </HStack>

      <Divider w="100%" bg="pink.500" top={2} />

      <Box alignItems="flex-start" mb={10} px={6}>
              {menuUsuario.map((item, index) => (
                <HStack key={index} mt={"1%"}>
                  {item.icon}
                  <Button variant="unstyled" onPress={() => navigation.navigate(item.screen)}>
                    {item.name}
                  </Button>
                </HStack>
              ))}
      </Box>


      <Box alignItems="flex-start">
        <Button borderRadius={60} bgColor="#E01983" width="80%" alignSelf="center" onPress={() => {}}>
          Verificar
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
export default PerfilUsuarioTab;