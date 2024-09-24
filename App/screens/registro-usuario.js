import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Center, Box, Heading, VStack, FormControl, Input, Button, HStack,  Text, Checkbox } from 'native-base';
export default function LoginScreen() {
  return (
    <NativeBaseProvider>
      <Center w="100%" flex={1} bgColor="white">
        {/* Formulario */}
          <Center>
            <Box 
              size={100} 
              bgColor="gray.200" 
              borderRadius="full"
              mb={5}
            />
          </Center>
          <Center width={"90%"}>
            <Heading size="lg" fontWeight="300" color="coolGray.800" textAlign="center">
            Registrate ingresando los siguientes datos y divierte conociendo personas
            </Heading>
          </Center>
          <VStack width="90%"  space={2} mt="5">
            {/* Formulario */}
           <FormControl>
            <Text mt={2}>Nombre</Text>
            <Input type='text' borderRadius={10} borderColor={"#E01983"} mt="2" ></Input>
            <Text mt={2}>Telefono</Text>
            <Input type='text' borderRadius={10} borderColor={"#E01983"} mt="2" ></Input>
            <Text mt={2}>Correo</Text>
            <Input type='text' borderRadius={10} borderColor={"#E01983"} mt="2" ></Input>
            <Text mt={2}>Contraseña</Text>
            <Input borderRadius={10} borderColor={"#E01983"} type="password" mt="2" ></Input>
            <Text mt={2}>Confirmar Contraseña</Text>
            <Input borderRadius={10} borderColor={"#E01983"} type="password" mt="2" ></Input>
           </FormControl>
            {/* Boton */}
            <VStack  space={2} mt="5">
              <Button mt="2" borderRadius={60} bgColor="#E01983" onPress={() => {}}>
                <Text color={"#ffff"} fontSize={20} fontFamily={"bold"}>Crear cuenta</Text>
              </Button>
            </VStack>
          </VStack>
      </Center>
    </NativeBaseProvider>
  );
}