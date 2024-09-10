import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { WarningOutlineIcon } from 'native-base';
import { Center, Box, Heading, VStack, FormControl, Input, Button } from 'native-base';

export default function LoginScreen() {
  return (
    <NativeBaseProvider>
      <Center w="100%" flex={1} bgColor="white">
        
        <Box safeArea p="2" w="90%" maxW="290" py="8" bg="white" borderRadius="lg" shadow="5">
          
          <Center>
            <Box 
              size={100} 
              bgColor="gray.200" 
              borderRadius="full"
              mb={5}
            />
          </Center>
          
          <Heading size="lg" fontWeight="600" color="coolGray.800" textAlign="center">
          Registrate ingresando los siguientes datos y divierte conociendo personas
          </Heading>

          <VStack space={3} mt="5">

            <FormControl>
              <FormControl.Label>Nombre</FormControl.Label>
              <Input borderColor="pink.500" />
              <FormControl.Label>Correo</FormControl.Label>
              <Input borderColor="pink.500" />
              <FormControl.Label>Correo</FormControl.Label>
              <Input borderColor="pink.500" />
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input type="password" borderColor="pink.500" />
              <FormControl.Label>Confirmar Contraseña</FormControl.Label>
              <Input type="password" borderColor="pink.500" />
            </FormControl>

            <FormControl>
              <FormControl.Label>Contraseña</FormControl.Label>
              <Input type="password" borderColor="pink.500" />
            </FormControl>

            {/* Botones */}
            <VStack  mt="5">
              <Button mt="2" colorScheme="pink" bgColor="pink.500">
                Crear Cuenta
              </Button>
            </VStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}