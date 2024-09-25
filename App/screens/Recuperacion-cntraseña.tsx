import React from 'react';
import { FormControl, NativeBaseProvider } from 'native-base';
import { Center, Box, VStack, Input, Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator ();

export default function RecupContra() {
  return (
    <NativeBaseProvider>
      <Center width={"100%"} flex={1} bg="white">
      {/* Título */}
      <Center width={"90%"}>
        <Text fontSize="lg" textAlign="center" mt={2} mb={4}>
            Ingresa tu dirección de email para recuperar tu contraseña
        </Text>
      </Center>
        <VStack width="90%"  space={2} mt="20">
          <FormControl>
            <Text mt={2}>Correo</Text>
            <Input borderRadius={10} borderColor={"#E01983"} mt="2" ></Input>
            <Button backgroundColor={"#E01983"} borderRadius={25} onPress={() => {}} mt={5} shadow="5"  >
              Enviar
            </Button>
          </FormControl>
        </VStack> 
      </Center>
    </NativeBaseProvider>
  );
}