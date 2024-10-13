import React, { useState } from 'react';
import { FormControl, NativeBaseProvider, Center, VStack, Input, Button, Text, Box } from 'native-base';

export  function RecupContra({navigation}:{navigation:any}) {
  const [email, setEmail] = useState('');
  const [validationMessage, setValidationMessage] = useState(''); // Mensaje de validación
  

  // Lista de correos de prueba
  const validEmails = ["1","test@example.com", "usuario@correo.com", "admin@dominio.com"];

  const handleSubmit = () => {
    if (validEmails.includes(email)) {
      setValidationMessage("El correo existe. Se ha enviado un enlace de recuperación.");
      // naveegacion  
      navigation.navigate('VerificarCod')
    } else {
      setValidationMessage("El correo no existe en nuestra base de datos.");
    }
  };

  return (
    <NativeBaseProvider>
      <Center width={"100%"} flex={1} bg="white">
        {/* Título */}
        <Center width={"90%"}>
          <Text fontSize="lg" textAlign="center" mt={2} mb={4}>
            Ingresa tu dirección de email para recuperar tu contraseña
          </Text>
        </Center>
        <VStack width="90%" space={2} mt="20">
          <FormControl>
            <Text mt={2}>Correo</Text>
            <Input
              borderRadius={10}
              borderColor={"#E01983"}
              mt="2"
              value={email}
              onChangeText={setEmail}
            />
            {validationMessage ? (
                <Box width={"90%"} mt={4}>
                  <Text color={validationMessage.includes("incorrecto") ? "green.600" : "red.600"} textAlign="center">
                    {validationMessage}
                  </Text>
                </Box>
              ) : null}
            <Button
              backgroundColor={"#E01983"}
              borderRadius={25}
              onPress={handleSubmit}
              mt={5}
              shadow="5"
            >
              Enviar
            </Button>
          </FormControl>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
