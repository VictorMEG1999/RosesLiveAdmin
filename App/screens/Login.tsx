import React, { useState } from 'react';
import { NativeBaseProvider, Center, Box, Heading, 
  VStack, FormControl, Input, Button, HStack, Text,
  Checkbox, Modal } from 'native-base';

export default function LoginScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Simular lista de usuarios con correos y contraseñas
  const users = [
    { email: "test@example.com", password: "123456" },
    { email: "usuario@correo.com", password: "contraseña123" },
  ];

  // Función para validar el login
  const handleLogin = () => {
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      setModalMessage("Inicio de sesión exitoso.");
    } else {
      setModalMessage("Correo o contraseña incorrectos.");
    }
    setShowModal(true); // Mostrar modal con el resultado
  };

  return (
    <NativeBaseProvider>
      <Center w="100%" flex={1} bgColor="white">
        <Center>
          <Box size={100} bgColor="gray.200" borderRadius="full" mb={5} />
        </Center>

        <Heading size="lg" fontWeight="600" color="coolGray.800" textAlign="center">
          Iniciar Sesión
        </Heading>

        <VStack width="90%" space={2} mt="5">
          <FormControl>
            <Text mt={2}>Correo</Text>
            <Input
              borderRadius={10}
              borderColor={"#E01983"}
              mt="2"
              value={email}
              onChangeText={setEmail}
            />
            <Text mt={2}>Contraseña</Text>
            <Input
              borderRadius={10}
              borderColor={"#E01983"}
              type="password"
              mt="2"
              value={password}
              onChangeText={setPassword}
            />
          </FormControl>
          <HStack justifyContent="space-between" mt="2">
            <Checkbox value="rememberMe" colorScheme="pink">Recordarme</Checkbox>
            <Text underline color="coolGray.600" onPress={() => {}}>
              Recuperar Contraseña
            </Text>
          </HStack>

          {/* Botones */}
          <VStack space={2} mt="5">
            <Button onPress={handleLogin} mt="2" borderRadius={60} bgColor="#E01983">
              Iniciar Sesión
            </Button>
            <Button onPress={() => {}} mt="2" borderRadius={60} bgColor="#E01983">
              Crear Cuenta
            </Button>
          </VStack>
        </VStack>
      </Center>

      {/* Modal personalizado */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content maxWidth="400px">
          <Modal.Body>
            <Text textAlign={"center"}>{modalMessage}</Text>
          </Modal.Body>
            <Button backgroundColor={"#E01983"} m={"2"} borderRadius={25} onPress={() => setShowModal(false)}>
              Cerrar
            </Button>
        </Modal.Content>
      </Modal>
    </NativeBaseProvider>
  );
}
