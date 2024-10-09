import React from 'react';
import { FlatList } from 'react-native';
import { Box, Text, HStack, VStack, Divider, NativeBaseProvider, Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const NotificacionesScreen = () => {

  // Ejemplo de datos de notificaciones
  const notificaciones = [
    { id: '1', titulo: 'Nueva actualización disponible', descripcion: 'La aplicación se ha actualizado a la versión 2.0.', icono: 'notifications-outline' },
    { id: '2', titulo: 'Mensaje nuevo de Juan', descripcion: 'Has recibido un nuevo mensaje de Juan.', icono: 'mail-outline' },
    { id: '3', titulo: 'Recordatorio de evento', descripcion: 'Tienes un evento programado para mañana a las 10:00 AM.', icono: 'calendar-outline' },
    { id: '4', titulo: 'Amigo se unió', descripcion: 'María se ha unido a la plataforma.', icono: 'person-add-outline' },
    { id: '5', titulo: 'Actualización de perfil', descripcion: 'Tu perfil ha sido actualizado exitosamente.', icono: 'checkmark-done-outline' },
  ];

  const renderItem = ({ item }) => (
    <Box px={5} py={2}>
      <HStack space={3} justifyContent="space-between">
        <Icon as={Ionicons} name={item.icono} size="lg" />
        <VStack>
          <Text bold>{item.titulo}</Text>
          <Text>{item.descripcion}</Text>
        </VStack>
      </HStack>
      <Divider my={2} />
    </Box>
  );

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white">
        <FlatList
          data={notificaciones}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default NotificacionesScreen;
