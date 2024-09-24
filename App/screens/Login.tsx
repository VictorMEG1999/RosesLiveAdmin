import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { Center, Box, Heading, VStack, FormControl, Input, Button, HStack,  Text, Checkbox } from 'native-base';
import { Image } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const nabegator = createNativeStackNavigator ();


export  function LoginScreen({navigation}) {
  const push = () =>{
    navigation.navigate('registro_usuario')
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
            <Input borderRadius={10} borderColor={"#E01983"} mt="2" ></Input>
            <Text mt={2}>Contraseña</Text>
            <Input borderRadius={10} borderColor={"#E01983"} type="password" mt="2" ></Input>
           </FormControl>
            <HStack justifyContent="space-between" mt="2">
                  <Checkbox value="rememberMe" colorScheme="pink">Recordarme</Checkbox>
                  <Text underline color="coolGray.600" onPress={() => {}} >
                    Recuperar Contraseña
                  </Text>
              </HStack>
            {/* Botones */}
            <VStack  space={2} mt="5">
              <Button onPress={() => {}} mt="2" borderRadius={60} bgColor="#E01983">
                Iniciar Sesión
              </Button>
              <Button onPress={() => {push()}} mt="2" borderRadius={60} bgColor="#E01983">
                Crear Cuenta
              </Button>
            </VStack>
          </VStack>
      </Center>
    </NativeBaseProvider>
  );
}