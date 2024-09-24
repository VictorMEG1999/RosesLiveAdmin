import React from 'react';
import { FormControl, HStack, NativeBaseProvider } from 'native-base';
import { Center, VStack, Input, Button, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator ();

export  function Recuperacion_Contr_cod() {
  return (
    <NativeBaseProvider>
      {/* Título */}
      <Text fontSize="lg" textAlign="center" mt={156} mb={4}>
          Ingresa tu dirección de email para recuperar tu contraseña
      </Text>
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
        <VStack width="90%"  space={2} mt="20">
            <Button onPress={() => {}} mt="2" borderRadius={60} bgColor="#E01983">
                Crear Cuenta
            </Button>
        </VStack> 
      </Center>    
    </NativeBaseProvider>
  );
}
