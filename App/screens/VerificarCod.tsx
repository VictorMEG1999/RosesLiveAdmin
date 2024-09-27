import React, { useState } from 'react';
import { FormControl, HStack, NativeBaseProvider, Modal, Box } from 'native-base';
import { Center, VStack, Input, Button, Text, Heading } from 'native-base';

export default function CodiContra() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const validCode = "123456"; // Código fijo de ejemplo para la validación

  // Función para manejar el cambio en los inputs
  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  // Función para validar el código
  const handleValidateCode = () => {
    const enteredCode = code.join(""); // Convertir el array de inputs a un string

    if (enteredCode === validCode) {
      setModalMessage("Código válido, cuenta verificada con éxito.");
    } else {
      setModalMessage("Código incorrecto, por favor inténtalo de nuevo.");
    }

    setShowModal(true); // Mostrar modal
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
        {/* Botón para validar */}
        <VStack w={"90%"} m={2}  marginBottom={3} mt="20">
          <Button mt="2" borderRadius={60} bg="#E01983" colorScheme="pink" onPress={handleValidateCode}>
            Validar Código
          </Button>
        </VStack>

        {/* Modal para mostrar el resultado de la validación */}
        <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
          <Modal.Content maxWidth="400px">
            <Modal.Body>
              <Text textAlign={"center"}>{modalMessage}</Text>
            </Modal.Body>
              <Button backgroundColor={"#E01983"} m={2} borderRadius={25} onPress={() => setShowModal(false)}>
                Cerrar
              </Button>
          </Modal.Content>
        </Modal>
      </Center>
    </NativeBaseProvider>
  );
}
