import React, { useState } from 'react'; 
import { NativeBaseProvider, Center, Box, Heading, VStack, 
        FormControl, Input, Button, KeyboardAvoidingView, 
        Text, ScrollView } from 'native-base';

import { checTex, search, SalveUserData } from "../controller/registro-usuario"

export function RegisUsua() {

  // Estado de los inputs
  const [state, setState] = useState({
    nombre: "",
    telefono: "",
    email: "",
    pass: "",
    RepitPass: "",
  });

  // Estado para mensajes de error
  const [errors, setErrors] = useState({
    nombre: "",
    telefono: "",
    email: "",
    pass: "",
    RepitPass: "",
  });

  // Captura de texto de los inputs
  const handleChangeText = (name: string, value: string) => {
    setState({ ...state, [name]: value });
  };

  // Validación de inputs
  const userSave = async () => {
    const { nombre, telefono, email, pass, RepitPass } = state;
    let statusSalve = true;
    const newErrors = { nombre: "", telefono: "", email: "", pass: "", RepitPass: "" };

    // Validación de nombre
    const checName = checTex(nombre, "text");
    if (checName) {
      statusSalve = false;
      newErrors.nombre = `Campo incompleto: ${checName}`;
    }

    // Validación de teléfono
    const checTelefono = checTex(telefono, "num");
    if (checTelefono) {
      statusSalve = false;
      newErrors.telefono = `Escribe solo numeros: ${checTelefono}`;
    }
    const searchNumero = await search("numerosStream", telefono);
    if (searchNumero) {
      statusSalve = false;
      newErrors.telefono = "El teléfono ya está asociado a una cuenta.";
    }

    // Validación de email
    const checEmail = checTex(email, "email");
    if (checEmail) {
      statusSalve = false;
      newErrors.email = `El correo ya esta asociado a una cuenta existente: ${checEmail}`;
    }
    const searchEmail = await search("email", email);
    if (searchEmail) {
      statusSalve = false;
      newErrors.email = "El correo ya está asociado a una cuenta exitente.";
    }

    // Validación de contraseña
    const checTexPass = checTex(pass, "email");
    if (checTexPass) {
      statusSalve = false;
      newErrors.pass = `Error en la contraseña: ${checTexPass}`;
    }
    if (pass !== RepitPass) {
      statusSalve = false;
      newErrors.RepitPass = "Las contraseñas no coinciden.";
    }

    // Actualizar los errores en el estado
    setErrors(newErrors);

    // Si todo está correcto, guardar el usuario
    if (statusSalve) {
      const doc = await SalveUserData(nombre, telefono, email, pass);
      console.log("Inserción exitosa: ", doc.id);
    }
  };

  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView>
        <ScrollView>
          <Center w="100%" flex={1} bg="white">
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
                Regístrate y diviértete conociendo personas
              </Heading>
            </Center>
            <VStack width="90%" space={2} mt="5">
              {/* Formulario */}
              <FormControl>
                <Text mt={2}>Nombre</Text>
                <Input 
                  onChangeText={(value) => handleChangeText('nombre', value)} 
                  type='text' 
                  borderRadius={10} 
                  borderColor={"#E01983"} 
                  mt="2" 
                />
                {errors.nombre ? <Text color="red.500">{errors.nombre}</Text> : null}

                <Text mt={2}>Teléfono</Text>
                <Input 
                  onChangeText={(value) => handleChangeText('telefono', value)} 
                  type='text' 
                  borderRadius={10} 
                  borderColor={"#E01983"} 
                  mt="2" 
                />
                {errors.telefono ? <Text color="red.500">{errors.telefono}</Text> : null}

                <Text mt={2}>Correo</Text>
                <Input 
                  onChangeText={(value) => handleChangeText('email', value)} 
                  type='text' 
                  borderRadius={10} 
                  borderColor={"#E01983"} 
                  mt="2" 
                />
                {errors.email ? <Text color="red.500">{errors.email}</Text> : null}

                <Text mt={2}>Contraseña</Text>
                <Input 
                  onChangeText={(value) => handleChangeText('pass', value)} 
                  borderRadius={10} 
                  borderColor={"#E01983"} 
                  type="password" 
                  mt="2" 
                />
                {errors.pass ? <Text color="red.500">{errors.pass}</Text> : null}

                <Text mt={2}>Confirmar Contraseña</Text>
                <Input 
                  onChangeText={(value) => handleChangeText('RepitPass', value)} 
                  borderRadius={10} 
                  borderColor={"#E01983"} 
                  type="password" 
                  mt="2" 
                />
                {errors.RepitPass ? <Text color="red.500">{errors.RepitPass}</Text> : null}
              </FormControl>

              {/* Botón */}
              <VStack space={2} marginBottom={3} mt="5">
                <Button 
                  mt="2" 
                  borderRadius={60} 
                  bg="#E01983" 
                  colorScheme="pink" 
                  onPress={userSave}
                >
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
