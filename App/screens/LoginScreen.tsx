import React, {useState} from 'react';
import { NativeBaseProvider } from 'native-base';
import { Center, Box, Heading, VStack, FormControl, Input, Button, HStack,  Text, Checkbox } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {checTex,login } from "../controller/login_controler"
const nabegator = createNativeStackNavigator ();


export  function LoginScreen({navigation}) {
  // declaracion de validabes  
  const [state, setState] = useState({
    email:"",
    pass:"",
    }
  );
  
  const handleChangeText = ( name: string, value: string, ) =>{
    setState({...state,[name]:value})
  }
  const log_ins = async ()  =>{

    // comprobacion de campo email
    const checEmail = checTex(state.email)
    if(checEmail){
      console.log("ERROR campo correo ==>",checEmail);
    }

    // comprobacion de dampo contraseña
    const checPass = checTex(state.pass)
    if(checPass){
      console.log("ERROR campo contraseña ==>",checPass);
    }

    if(!checEmail && !checPass){
      console.log("email ", checEmail ," pass ",checPass);
      const idUserLog = await login(state.email,state.pass)
      console.log("resultado = ",idUserLog);
    }
  }
  return (
    <NativeBaseProvider>
      <Center w="100%" flex={1} bgColor="white">
          <Center>
            <Box 
              size={100} 
              bgColor="gray.200" 
              borderRadius="full"
              mb={5}
            />
          </Center>
          
          <Heading size="lg" fontWeight="600" color="coolGray.800" textAlign="center">
            Iniciar Sesión
          </Heading>

          <VStack width="90%"  space={2} mt="5">
           <FormControl>
            <Text mt={2}>Correo</Text>
            <Input onChangeText={(value)=> handleChangeText('email',value)}  borderRadius={10} borderColor={"#E01983"} mt="2" ></Input>
            <Text mt={2}>Contraseña</Text>
            <Input onChangeText={(value)=> handleChangeText('pass',value)}  borderRadius={10} borderColor={"#E01983"} type="password" mt="2" ></Input>
           </FormControl>
            <HStack justifyContent="space-between" mt="2">
                  <Checkbox value="rememberMe" colorScheme="pink">Recordarme</Checkbox>
                  <Text underline color="coolGray.600" onPress={() => {navigation.navigate('RecupContra')}} >
                    Recuperar Contraseña
                  </Text>
              </HStack>
            {/* Botones */}
            <VStack  space={2} mt="5">
              <Button onPress={() => {log_ins()}} mt="2" borderRadius={60} bgColor="#E01983">
                Iniciar Sesión
              </Button>
              <Button onPress={() => {navigation.navigate('RegisUsua')}} mt="2" borderRadius={60} bgColor="#E01983">
                Crear Cuenta
              </Button>
            </VStack>
          </VStack>
      </Center>
    </NativeBaseProvider>
  );
}