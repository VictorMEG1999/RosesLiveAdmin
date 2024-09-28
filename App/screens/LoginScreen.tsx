import React, { useState } from 'react';
import { NativeBaseProvider, Center, Box, Heading,
  VStack, FormControl, Input, Button, HStack, Text,
  Checkbox, Modal } from 'native-base';


import {checTex,login } from "../controller/login_controler"


export function LoginScreen({navigation}) {
  // declaracion de validabes
  const [state, setState] = useState({
    email:"",
    pass:"",
    }
  );

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  // captura de datos
  const handleChangeText = ( name: string, value: string, ) =>{
    setState({...state,[name]:value})
  }

  const log_ins = async ()  =>{

    // comprobacion de campo email
    const checEmail = checTex(state.email, "email")
    if(checEmail){
      setModalMessage("ERROR campo correo ==>"+checEmail);
      setShowModal(true); // Mostrar modal con el resultado
    }

    // comprobacion de dampo contraseña
    const checPass = checTex(state.pass, "email")
    if(checPass){
      setModalMessage("ERROR campo contraseña ==> "+checPass);
      setShowModal(true); // Mostrar modal con el resultado
    }

    if(!checEmail && !checPass){
      const idUserLog = await login(state.email,state.pass)
      // retorna el id del usurio logueado que coninsida con los datos 
      setModalMessage("resultado = "+idUserLog);
      setShowModal(true); // Mostrar modal con el resultado
    }
  }
  return (
    <NativeBaseProvider>
      <Center w="100%" flex={1} bgColor="white">
        <Center>
          <Box size={100} bgColor="gray.200" borderRadius="full" mb={5} />
        </Center>

        <Heading size="lg" fontWeight="600" color="coolGray.800" textAlign="center">
          Iniciar Sesión
        </Heading>

          <VStack width="90%"  space={2} mt="5">
           <FormControl>
            <Text mt={2}>Correo</Text>
            <Input
              borderRadius={10}
              borderColor={"#E01983"}
              mt="2"
              onChangeText={(value)=> handleChangeText('email',value)}
            />
            <Text mt={2}>Contraseña</Text>
            <Input
              borderRadius={10}
              borderColor={"#E01983"}
              type="password"
              mt="2"
              onChangeText={(value)=> handleChangeText('pass',value)}
            />
          </FormControl>
          <HStack justifyContent="space-between" mt="2">
            <Checkbox value="rememberMe" colorScheme="pink">Recordarme</Checkbox>
            <Text underline color="coolGray.600" onPress={() => {navigation.navigate('RecupContra')}}>
              Recuperar Contraseña
            </Text>
          </HStack>

          {/* Botones */}
          <VStack space={2} mt="5">
            <Button onPress={() => {log_ins()}} mt="2" borderRadius={60} bgColor="#E01983">
              Iniciar Sesión
            </Button>
            <Button onPress={() => {navigation.navigate('RegisUsua')}} mt="2" borderRadius={60} bgColor="#E01983">
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