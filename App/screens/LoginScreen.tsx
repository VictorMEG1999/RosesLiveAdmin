import React, { useState } from 'react';
import { NativeBaseProvider, Center, Box, Heading, VStack, FormControl,
         Input, Button, HStack, Text, Checkbox, Modal } from 'native-base';
import Svg, { Path } from 'react-native-svg';
import styles from '../styles/LoginScreenStyles';
import { checTex, login } from "../controller/LoginController";
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export function LoginScreen({ navigation }:{navigation:any}) {
  const [state, setState] = useState({
    email: "",
    pass: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Captura de datos
  const handleChangeText = (name: string, value: string) => {
    setState({ ...state, [name]: value });
  };

  // Función para el login
  const log_ins = async () => {
    // Comprobación de campo email
    const checEmail = checTex(state.email, "email");
    if (checEmail) {
      setModalMessage("ERROR campo correo ==> " + checEmail);
      setShowModal(true); // Mostrar modal con el error
      return;
    }

    // Comprobación de campo contraseña
    const checPass = checTex(state.pass, "pass"); // Cambiar "email" por "pass"
    if (checPass) {
      setModalMessage("ERROR campo contraseña ==> " + checPass);
      setShowModal(true); // Mostrar modal con el error
      return;
    }

    // Si ambos campos son correctos, realizar login
    const idUserLog = await login(state.email, state.pass);
    if (idUserLog) {
      // Redirigir a la pantalla de inicio si el login es exitoso
      navigation.navigate('InicioUsuario'); // Asegúrate de que 'InicioUsuario' sea el nombre correcto
    } else {
      setModalMessage("Usuario o contraseña incorrectos");
      setShowModal(true); // Mostrar modal con el resultado
    }
  };

  return (
    <NativeBaseProvider>
      <Center style={styles.container}>
        <VStack w="90%" maxW="400px" space={1} mt="180">
            <Center>
              <Box size={100} bgColor="gray.200" borderRadius="full" mb={5} />
            </Center>

        <Heading size="lg" fontWeight="600" color="coolGray.800" textAlign="center">
          Iniciar Sesión
        </Heading>

        <VStack space={3} mt="5">
                    <FormControl>
                      <FormControl.Label>Correo</FormControl.Label>
                      <Input
                        style={styles.input}
                        borderWidth={0}
                        onChangeText={(value) => handleChangeText('email', value)}
                      />

                      <FormControl.Label>Contraseña</FormControl.Label>
                      <Input
                        type="password"
                        style={styles.input}
                        borderWidth={0}
                        onChangeText={(value) => handleChangeText('pass', value)}
                      />

                      <HStack justifyContent="space-between" mt="3">
                        <Checkbox value="rememberMe" colorScheme="pink">Recordarme</Checkbox>
                        <Text underline color="coolGray.600" onPress={() => { navigation.navigate('RecupContra'); }}>
                          Recuperar Contraseña
                        </Text>
                      </HStack>
                    </FormControl>

                    {/* Botones */}
                    <VStack space={3} mt="5">
                      <Button style={styles.button} _pressed={styles.buttonPressed}
                        onPress={() => { log_ins(); }}>
                        Iniciar Sesión
                      </Button>
                      <Button style={styles.button} _pressed={styles.buttonPressed}
                        onPress={() => { navigation.navigate('RegisUsua'); }}>
                        Crear Cuenta
                      </Button>
                    </VStack>
                  </VStack>
         </VStack>

         {/* Imagen figura SVG */}
                <Svg height="30%" width={width} viewBox="0 0 1440 350" style={styles.wave}>
                  <Path fill="#E01983" d="M0,-20 C500,-200 1000,20 1440,-200 L1440,800 L0,800 Z" />
                </Svg>
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