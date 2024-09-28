import React, { useState } from 'react';
import { FormControl, NativeBaseProvider,
       Center, Heading, VStack, Input, 
       Button, Text, Modal } from 'native-base';

export function CambContra({navigation}) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = () => {
    if (password === confirmPassword) {
      setModalMessage("Las contraseñas coinciden.");
      navigation.navigate('LoginScreen')
    } else {
      setModalMessage("Las contraseñas no coiciden, intentalo nuevamente.");
    }
    setShowModal(true);/* muestra el modal en lugar de un alert  */
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

      {/* Modal personalizado */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="400px">
          <Modal.Body>
            <Text>{modalMessage}</Text>
          </Modal.Body>
            <Button backgroundColor={"#E01983"} borderRadius={"25"} flex={1} onPress={() => setShowModal(false)}>
              Cerrar
            </Button>
        </Modal.Content>
      </Modal>
    </NativeBaseProvider>
  );
}
