import React from 'react';
import { FlatList } from 'react-native';
import { Box, Text, HStack, VStack, Divider, NativeBaseProvider } from 'native-base';

export const MensajesScreen = () => {

  // Ejemplo de datos de mensajes
  const mensajes = [
    { id: '1', usuario: 'Juan', mensaje: 'Hola, ¿cómo estás?' },
    { id: '2', usuario: 'María', mensaje: '¿Nos vemos mañana?' },
    { id: '3', usuario: 'Pedro', mensaje: '¡Buen trabajo!' },
    { id: '4', usuario: 'Ana', mensaje: 'Me encanta el nuevo proyecto.' },
    { id: '5', usuario: 'Luis', mensaje: 'Estoy de acuerdo con los cambios.' },
  ];

  const renderItem = ({ item }) => (
    <Box px={5} py={2}>
      <HStack space={3} justifyContent="space-between">
        <VStack>
          <Text bold>{item.usuario}</Text>
          <Text>{item.mensaje}</Text>
        </VStack>
      </HStack>
      <Divider my={2} />
    </Box>
  );

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white">
        <FlatList
          data={mensajes}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default MensajesScreen;
