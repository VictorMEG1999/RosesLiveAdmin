import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Box, Text, VStack, HStack, Button, NativeBaseProvider, Center } from 'native-base';

export const MonederoScreen = () => {
  const [saldo, setSaldo] = useState(100); // Ejemplo de saldo inicial en pétalos

  // Opciones de compra de pétalos
  const opcionesCompra = [
    { cantidad: 10, precio: 1 },
    { cantidad: 50, precio: 5 },
    { cantidad: 100, precio: 10 },
    { cantidad: 500, precio: 45 },
  ];

  const comprarPetalos = (cantidad, precio) => {
    Alert.alert(
      'Confirmar compra',
      `¿Deseas comprar ${cantidad} pétalos por $${precio}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Comprar',
          onPress: () => {
            setSaldo(saldo + cantidad); // Aumentar el saldo con los pétalos comprados
            Alert.alert('Compra exitosa', `Has comprado ${cantidad} pétalos.`);
          },
        },
      ],
    );
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white" px={5} py={8}>
        <Center>
          <Text bold fontSize="2xl" mb={5}>Monedero de Pétalos</Text>
          <Text fontSize="lg">Saldo actual: {saldo} pétalos</Text>
        </Center>

        <VStack space={5} mt={8}>
          {opcionesCompra.map((opcion, index) => (
            <HStack
              key={index}
              justifyContent="space-between"
              alignItems="center"
              px={5}
              py={3}
              borderWidth={1}
              borderColor="gray.300"
              borderRadius="md"
            >
              <Text fontSize="md">{opcion.cantidad} Pétalos</Text>
              <Button onPress={() => comprarPetalos(opcion.cantidad, opcion.precio)}>
                Comprar por ${opcion.precio}
              </Button>
            </HStack>
          ))}
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default MonederoScreen;
