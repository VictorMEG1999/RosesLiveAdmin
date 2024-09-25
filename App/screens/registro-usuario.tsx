import React from 'react';
import { NativeBaseProvider } from 'native-base';

import { Center, Box, Heading, VStack, 
        FormControl, Input, Button, KeyboardAvoidingView, 
        Text, ScrollView } from 'native-base';
        
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator ();

export default function RegisUsua() {
  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView>
        <ScrollView>
          <Center w="100%" flex={1} bg="white">
            {/* Formulario */}
            <Center mt={3}>
              <Box 
                size={100} 
                bg="gray.200" 
                borderRadius="full"
                mb={5}
              />
            </Center>
            <Center width={"90%"}>
              <Heading size="lg" fontWeight="300" color="coolGray.800" textAlign="center">
                Regístrate ingresando los siguientes datos y diviértete conociendo personas
              </Heading>
            </Center>
            <VStack width="90%" space={2} mt="5">
              {/* Formulario */}
              <FormControl mb="5">
                <Text mt={2}>Nombre</Text>
                <Input type='text' borderRadius={10} borderColor={"#E01983"} mt="2" />
                <Text mt={2}>Teléfono</Text>
                <Input type='text' borderRadius={10} borderColor={"#E01983"} mt="2" />
                <Text mt={2}>Correo</Text>
                <Input type='text' borderRadius={10} borderColor={"#E01983"} mt="2" />
                <Text mt={2}>Contraseña</Text>
                <Input borderRadius={10} borderColor={"#E01983"} type="password" mt="2" />
                <Text mt={2}>Confirmar Contraseña</Text>
                <Input borderRadius={10} borderColor={"#E01983"} type="password" mt="2" />
              </FormControl>
              {/* Botón */}
              <VStack space={2} marginBottom={3} mt="5">
                <Button mt="2" borderRadius={60} bg="#E01983" colorScheme="pink" onPress={() => {}}>
                  Crear cuenta
                </Button>
              </VStack>
            </VStack>
          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
}
