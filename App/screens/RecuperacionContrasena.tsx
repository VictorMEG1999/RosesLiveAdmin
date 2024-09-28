import React, { useState } from 'react';
import { FormControl, NativeBaseProvider, Center, VStack, Input, Button, Text, Modal } from 'native-base';

export  function RecupContra({navigation}) {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Lista de correos de prueba
  const validEmails = ["1","test@example.com", "usuario@correo.com", "admin@dominio.com"];

  const handleSubmit = () => {
    if (validEmails.includes(email)) {
      setModalMessage("El correo existe. Se ha enviado un enlace de recuperación.");
      // naveegacion  
      navigation.navigate('VerificarCod')
    } else {
      setModalMessage("El correo no existe en nuestra base de datos.");
    }
    setShowModal(true); /* muestra el modal en lugar de un alert */
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

      {/* Modal personalizado */}
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
    </NativeBaseProvider>
  );
}
