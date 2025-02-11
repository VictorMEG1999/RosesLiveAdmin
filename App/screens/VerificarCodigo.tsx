import React, { useState } from 'react';
import { FormControl, HStack, NativeBaseProvider,  Box } from 'native-base';
import { Center, VStack, Input, Button, Text, Heading, ScrollView, KeyboardAvoidingView } from 'native-base';
/*inportacion para barra superior */
import Svg, { Path } from 'react-native-svg';
import styles from '../styles/LoginScreenStyles';
const { width, height } = Dimensions.get('window');
import { Dimensions } from 'react-native';
/*inportacion para barra superior */
export  function VerificarCod({navigation}) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [validationMessage, setValidationMessage] = useState(''); // Mensaje de validación
  const validCode = "123456"; // Código fijo de ejemplo para la validación

  // Función para manejar el cambio en los inputs
  const handleChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

 // Función para validar el código
 const handleValidateCode = () => {
  const enteredCode = code.join(""); // Convertir el array de inputs a un string

  if (enteredCode === validCode) {
    setValidationMessage("Cuenta verificada con exito.");
    navigation.navigate('CambContrasena');
  } else {
    setValidationMessage("Código incorrecto, por favor inténtalo de nuevo.");
  }
};
  return (
    <NativeBaseProvider>
      <Center w={"100%"} flex={1} bg="white">
        <Center width={"90%"}>
          <Heading size="lg" fontWeight="300" color="coolGray.800" textAlign="center">
            Ingresa el código que te enviamos a tu correo para validar tu cuenta
          </Heading>
        </Center>

        {/* Inputs para el código */}
        <Center>
          <HStack width="90%" space={2} mt="20" justifyContent="center" >
            <FormControl flexDirection={"row"} justifyContent="center">
              {code.map((value, index) => (
                <Input 
                  key={index}
                  borderRadius={10}
                  marginLeft={3}
                  h="10"
                  w="10"
                  maxLength={1} // Solo permite un dígito por campo
                  textAlign="center"
                  value={value}
                  onChangeText={(v) => handleChange(v, index)}
                  borderColor={"#E01983"}
                  mt="2"
                />
              ))}
            </FormControl>
          </HStack>
        </Center>
        
        <Box width={"90%"} marginTop={3} justifyContent={"left"}>
          <Text underline color="coolGray.600" onPress={() => {}} paddingLeft={4} >Volver a enviar el codigo</Text>
        </Box>
        <Box m={3}>
          {/* Mostrar el mensaje de validación */}
          {validationMessage ? (
                <Box width={"90%"} mt={4}>
                  <Text color={validationMessage.includes("incorrecto") ? "red.600" : "green.600"} textAlign="center">
                    {validationMessage}
                  </Text>
                </Box>
              ) : null}
        </Box>
        {/* Botón para validar */}
        <VStack w={"90%"} m={2}  marginBottom={3} mt="20">
          <Button mt="2" borderRadius={60} bg="#E01983" colorScheme="pink" onPress={handleValidateCode}>
            Validar Código
          </Button>
        </VStack>

      </Center>
    </NativeBaseProvider>
  );
}
