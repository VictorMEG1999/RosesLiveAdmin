import React from 'react';
import { FormControl, HStack, NativeBaseProvider } from 'native-base';
import { Center, VStack, Input, Button, Text, Heading } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator ();

export function CodiContra({navigation}) {
  return (
    <NativeBaseProvider>
      <Center w={"100%"} flex={1} bg="white">
        <Center width={"90%"}>
          <Heading size="lg" fontWeight="300" color="coolGray.800" textAlign="center">
            Ingresa a tu correo el codigo que te hicimnos llegar a tu correo para validar
          </Heading>
        </Center>
      {/* CODIGO*/}
      <Center>
        <HStack width="90%" space={2} mt="20" justifyContent="center" >
          <FormControl flexDirection={"row"} justifyContent="center">
              <Input borderRadius={10} marginLeft={3}  h="10" w="10" width={10}  borderColor={"#E01983"} mt="2" ></Input>
              <Input borderRadius={10} marginLeft={3}  h="10" w="10"  borderColor={"#E01983"} mt="2" ></Input>
              <Input borderRadius={10} marginLeft={3}  h="10" w="10"  borderColor={"#E01983"} mt="2" ></Input>
              <Input borderRadius={10} marginLeft={3}  h="10" w="10"  borderColor={"#E01983"} mt="2" ></Input>
              <Input borderRadius={10} marginLeft={3}  h="10" w="10"  borderColor={"#E01983"} mt="2" ></Input>
              <Input borderRadius={10} marginLeft={3}  h="10" w="10"  borderColor={"#E01983"} mt="2" ></Input>
          </FormControl>
        </HStack>
      </Center>
      {/* CODIGO*/}

      {/* Boton*/}
      <VStack w={"90%"} marginTop={5} space={4} marginBottom={3} mt="5">
        <Button mt="2" borderRadius={60} bg="#E01983" colorScheme="pink" onPress={() => {navigation.navigate('CambContra')}}>
          Crear cuenta
        </Button>
      </VStack>
      {/* Boton*/}
      </Center>
    </NativeBaseProvider>
  );
}
