import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Center, Button, HStack, CheckIcon, Text, Divider, NativeBaseProvider, Box } from 'native-base';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

export function PerfilUsuarioTab() {
  return (
    <NativeBaseProvider>
      <Center>
        <Box
          size={120}
          bgColor="gray.200"
          borderRadius="full"
          mb={5}
        />
      </Center>

      <Divider w="100%" bg="pink.500" />

      <Box alignItems="flex-start" mb={10} px={6}>
        {["Mensajes", "Notificaciones", "Monedero", "Mi Nivel", "Mis Invitaciones", "Galeria"].map((item, index) => (
          <HStack key={index} mt={2}>
            <CheckIcon size="5" mt="2.5" color="emerald.500" />
            <Button variant="unstyled" onPress={() => {}}>
              {item}
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

/*
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={PerfilUsuarioTab} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}*/