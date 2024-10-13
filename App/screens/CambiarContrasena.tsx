import React, { useState } from 'react';
import { FormControl, NativeBaseProvider,
       Center, Heading, VStack, Input, 
       Button, Text, Box } from 'native-base';

export function CambContra({navigation}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [validationMessage, setValidationMessage] = useState(''); // Mensaje de validación

  const handleSubmit = () => {
    if (password === confirmPassword) {
      setValidationMessage("Las contraseñas coinciden.");
      navigation.navigate('LoginScreen')
    } else {
      setValidationMessage("Las contraseñas no coiciden, intentalo nuevamente.");
    }
  };

  return (
    <NativeBaseProvider>
      <Center w="100%" flex={1} bg="white">
        <Heading size="lg" fontWeight="300" color="coolGray.800" textAlign="center">
          Ingresa tu nueva contraseña
        </Heading>
        <Center w={"98%"}>
          <VStack width="90%" space={2} mt="20">
            <FormControl>
              <Text mt={2}>Contraseña</Text>
              <Input
                borderRadius={10} type="password" borderColor={"#E01983"} mt="2"
                value={password}
                onChangeText={setPassword}
              />
              <Text mt={2}>Confirma tu nueva contraseña</Text>
              <Input borderRadius={10} type="password" borderColor={"#E01983"} mt="2"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
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
                Confirmar
              </Button>
            </FormControl>
          </VStack>
        </Center>
      </Center>
    </NativeBaseProvider>
  );
}
