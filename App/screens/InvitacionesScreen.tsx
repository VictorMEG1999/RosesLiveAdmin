import React, { useState } from 'react';
import { Box, Text, VStack, HStack, Button, Center, NativeBaseProvider, FlatList } from 'native-base';

export const InvitacionesScreen = () => {
  // Datos de ejemplo de solicitudes de seguimiento
  const [solicitudes, setSolicitudes] = useState([
    { id: '1', nombre: 'Usuario1' },
    { id: '2', nombre: 'Usuario2' },
    { id: '3', nombre: 'Usuario3' },
  ]);

  // Función para aceptar la solicitud
  const aceptarSolicitud = (id) => {
    setSolicitudes(solicitudes.filter(solicitud => solicitud.id !== id));
    // Aquí puedes agregar lógica para aceptar la solicitud (API, base de datos, etc.)
  };

  // Función para rechazar la solicitud
  const rechazarSolicitud = (id) => {
    setSolicitudes(solicitudes.filter(solicitud => solicitud.id !== id));
    // Aquí puedes agregar lógica para rechazar la solicitud (API, base de datos, etc.)
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white" px={5} py={8}>
        <Center>
          <Text bold fontSize="2xl" mb={5}>Mis Invitaciones</Text>
        </Center>

        <VStack space={5}>
          {/* Lista de solicitudes */}
          <FlatList
            data={solicitudes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Box borderBottomWidth={1} borderColor="gray.200" pb={4} mb={4}>
                <HStack justifyContent="space-between" alignItems="center">
                  <Text fontSize="lg">{item.nombre} te ha enviado una solicitud</Text>
                  <HStack space={2}>
                    {/* Botón para aceptar la solicitud */}
                    <Button colorScheme="green" onPress={() => aceptarSolicitud(item.id)}>Aceptar</Button>

                    {/* Botón para rechazar la solicitud */}
                    <Button colorScheme="red" onPress={() => rechazarSolicitud(item.id)}>Rechazar</Button>
                  </HStack>
                </HStack>
              </Box>
            )}
            ListEmptyComponent={() => (
              <Center>
                <Text color="gray.500">No tienes nuevas invitaciones</Text>
              </Center>
            )}
          />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default InvitacionesScreen;
