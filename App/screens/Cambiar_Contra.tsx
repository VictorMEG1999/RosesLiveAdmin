import React from 'react';
import { FormControl, NativeBaseProvider, Center, Heading, VStack, Input, Button, Text} from 'native-base';

export default function CambContra() {
  return (
    <NativeBaseProvider>
      <Center w="100%" flex={1} bg="white">
        <Heading size="lg" fontWeight="300" color="coolGray.800" textAlign="center">
              Ingresa tu nueva contraseña
        </Heading>
        <Center w={"98%"}>
        <VStack width="90%"  space={2} mt="20">
            <FormControl>
            <Text mt={2}>Contraseña</Text>
            <Input borderRadius={10} type='password' borderColor={"#E01983"} mt="2" ></Input>
            <Text mt={2}>Confirma tu nueva contraseña</Text>
            <Input borderRadius={10} type='password' borderColor={"#E01983"} mt="2" ></Input>
            
            <Button backgroundColor={"#E01983"} borderRadius={25} onPress={() => {}} mt={5} shadow="5"  >
              Confirmar
            </Button>
            </FormControl>
        </VStack> 
      </Center>
      </Center>
    </NativeBaseProvider>
  );
}