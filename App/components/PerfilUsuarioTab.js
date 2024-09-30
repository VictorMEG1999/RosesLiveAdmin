import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Center, Button, HStack, Icon, Text, Divider, NativeBaseProvider, Box } from 'native-base';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Dimensions } from 'react-native';
import styles from '../styles/PerfilUsuarioTabStyles'; //Aqui importa tu hoja de estilos

const { width, height } = Dimensions.get('window');


export function PerfilUsuarioTab({ navigation }) {
  const menuItems = [
    { name: "Mensajes", icon: <MaterialIcons name="message" size={24} color="green" />, screen: "MensajesScreen" },
    { name: "Notificaciones", icon: <Ionicons name="notifications" size={24} color="blue" />, screen: "NotificacionesScreen" },
    { name: "Monedero", icon: <FontAwesome name="wallet" size={24} color="purple" />, screen: "MonederoScreen" },
    { name: "Mi Nivel", icon: <MaterialIcons name="star" size={24} color="gold" />, screen: "NivelScreen" },
    { name: "Mis Invitaciones", icon: <Ionicons name="people" size={24} color="orange" />, screen: "InvitacionesScreen" },
    { name: "Galeria", icon: <MaterialIcons name="photo-library" size={24} color="red" />, screen: "GaleriaScreen" },
  ];

  return (
    <NativeBaseProvider>

    <View style={styles.containerBuscador}>
          {/* Aquí va el menú */}
          <View style={styles.menu}>
            <Text style={styles.menuText}>Menú aquí</Text>
          </View>
          {/* Aquí va el menú */}
        </View>

      <Center>
        <Box
          size={120}
          bgColor="gray.200"
          borderRadius="full"
          mb={5}
        />

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

      </Center>

      <Divider w="100%" bg="pink.500" />

      <Box alignItems="flex-start" mb={20} px={9}>
        {menuItems.map((item, index) => (
          <HStack key={index} mt={"1%"}>
            {item.icon}
            <Button variant="unstyled" onPress={() => navigation.navigate(item.screen)}>
              {item.name}
            </Button>
          </HStack>
        ))}
      </Box>

      <Box alignItems="flex-start" mb={4}>
        <Button borderRadius={60} bgColor="#E01983" width="80%" alignSelf="center" onPress={() => {}}>
          Verificar
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}

export default PerfilUsuarioTab;