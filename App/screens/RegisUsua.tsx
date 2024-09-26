import React, {useState} from 'react';
import { NativeBaseProvider } from 'native-base';

import { Center, Box, Heading, VStack, 
        FormControl, Input, Button, KeyboardAvoidingView, 
        Text, ScrollView } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {checTex,search,SalveUserData} from "../controller/registro-usuario"



export  function RegisUsua() {

   // Declaration de validates  
   const [state, setState] = useState({
    nombre:"",
    telefono:"",
    email:"",
    pass:"",
    RepitPass:"",
  });

  // captura de texto de los inputs 
  const handleChangeText = ( name: string, value: string, ) =>{
    setState({...state,[name]:value})
  }
  // Validación de inputs
  const userSave = async ()  =>{
    
    const nombre=state.nombre
    const telefono=state.telefono
    const email=state.email
    const pass=state.pass
    const RepitPass=state.RepitPass
    let statusSalve = true

    // Validación de nombre  
    const checName = checTex(nombre,"text")
    if(checName){
      statusSalve = false
      console.log("ERROR campo nombre ==>",checName);
    }

    // Validación de teléfono
    const checTelefono = checTex(telefono,"num")
    if(checTelefono){
      statusSalve = false
      console.log("ERROR campo telefono ==>",checTelefono);
    }
    // Validación de existencia teléfono en la base de datos
    const searchNumero = await search("numerosStream",telefono)
    if(searchNumero){
      statusSalve = false
      console.log("El telefono ya esta asosiado a una cuenta");
    }

    // Validación de email
    const checEmail = checTex(email,"email")
    if(checEmail){
      statusSalve = false
      console.log("ERROR campo email ==>",checEmail);
    }
    // Validación de existencia email en la base de datos
    const searchEmail = await search("email" ,email)
    if (searchEmail) {
      statusSalve = false
      console.log("El coreo ya esta asosiado a una cuenta");
    }

    // validacion de Contraseña
    const checTexPass = checTex(pass,"email")
    if(checTexPass){
      statusSalve = false
      console.log("ERROR campo Contraseña ==>",checTexPass);
    }
    // Comparación de contraseña  
    const checTexRepitPass = checTex(RepitPass,"email")
    if(checTexRepitPass){
      statusSalve = false
      console.log("ERROR campo Confirmar Contraseña ==>",checTexRepitPass);
    }else if(pass!=RepitPass){
      statusSalve = false
      console.log("lo Contraseña no coincide");
    }
    // Verificacion de estado y consulta 
    if(statusSalve){
      let doc = await SalveUserData(nombre, telefono, email, pass)
      console.log("inser",doc.id);
    }
  }

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView>
        <ScrollView>
          <Center w="100%" flex={1} bg="white">
            {/* Formulario */}
            <Center mt={3}>
              <Box 
                size={100} 
                bg="gray.200" 
                borderRadius="full"
                mb={5}
              />
            </Center>
            <Center width={"90%"}>
              <Heading size="lg" fontWeight="300" color="coolGray.800" textAlign="center">
                Regístrate ingresando los siguientes datos y diviértete conociendo personas
              </Heading>
            </Center>
            <VStack width="90%" space={2} mt="5">
              {/* Formulario */}
              <FormControl>
                <Text mt={2}>Nombre</Text>
                <Input onChangeText={(value)=> handleChangeText('nombre',value)} type='text' borderRadius={10} borderColor={"#E01983"} mt="2" ></Input>
                <Text mt={2}>Telefono</Text>
                <Input onChangeText={(value)=> handleChangeText('telefono',value)} type='text' borderRadius={10} borderColor={"#E01983"} mt="2" ></Input>
                <Text mt={2}>Correo</Text>
                <Input onChangeText={(value)=> handleChangeText('email',value)} type='text' borderRadius={10} borderColor={"#E01983"} mt="2" ></Input>
                <Text mt={2}>Contraseña</Text>
                <Input onChangeText={(value)=> handleChangeText('pass',value)} borderRadius={10} borderColor={"#E01983"} type="password" mt="2" ></Input>
                <Text mt={2}>Confirmar Contraseña</Text>
                <Input onChangeText={(value)=> handleChangeText('RepitPass',value)} borderRadius={10} borderColor={"#E01983"} type="password" mt="2" ></Input>
             </FormControl>
              {/* Botón */}
              <VStack space={2} marginBottom={3} mt="5">
                <Button mt="2" borderRadius={60} bg="#E01983" colorScheme="pink" onPress={() => {userSave()}}>
                  Crear cuenta
                </Button>
              </VStack>
            </VStack>
          </Center>
        </ScrollView>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
}
