import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Box, Text, HStack, VStack, Divider, NativeBaseProvider, Icon, Spacer, Pressable } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import dayjs from 'dayjs';

interface Notificacion {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
  leido: boolean;
  fecha: string;
}

export const NotificacionesScreen = () => {

  const [notificaciones, setNotificaciones] = useState([
    { id: '1', titulo: 'Nueva actualización disponible', descripcion: 'La aplicación se ha actualizado a la versión 2.0.', icono: 'notifications-outline', leido: false, fecha: dayjs().format('DD/MM/YYYY HH:mm') },
    { id: '2', titulo: 'Mensaje nuevo de Juan', descripcion: 'Has recibido un nuevo mensaje de Juan.', icono: 'mail-outline', leido: false, fecha: dayjs().format('DD/MM/YYYY HH:mm') },
    { id: '3', titulo: 'Recordatorio de evento', descripcion: 'Tienes un evento programado para mañana a las 10:00 AM.', icono: 'calendar-outline', leido: false, fecha: dayjs().format('DD/MM/YYYY HH:mm') },
    { id: '4', titulo: 'Amigo se unió', descripcion: 'María se ha unido a la plataforma.', icono: 'person-add-outline', leido: true, fecha: dayjs().format('DD/MM/YYYY HH:mm') },
    { id: '5', titulo: 'Actualización de perfil', descripcion: 'Tu perfil ha sido actualizado exitosamente.', icono: 'checkmark-done-outline', leido: false, fecha: dayjs().format('DD/MM/YYYY HH:mm') },
  ]);

  const marcarComoLeido = (id: string) => {
    setNotificaciones((prevNotificaciones) =>
      prevNotificaciones.map((notificacion) =>
        notificacion.id === id ? { ...notificacion, leido: true } : notificacion
      )
    );
  };

  const renderItem = ({ item }: { item: Notificacion }) => (
    <Pressable onPress={() => marcarComoLeido(item.id)}>
      <Box px={5} py={2} bg={item.leido ? 'white' : 'pink.200'}>
        <VStack space={3} justifyContent="space-between">
          <HStack flex={1} alignItems="center">
            <Icon as={Ionicons} margin={2} name={item.icono} size="lg" color={item.leido ? "gray.400" : "black"} />
            <VStack flex={1}>
              <Text bold color={item.leido ? "gray.400" : "black"}>
                {item.titulo}
              </Text>
              <Text color={item.leido ? "gray.400" : "black"}>{item.descripcion}</Text>
              <Text fontSize="xs" color="gray.500">{item.fecha}</Text> 
            </VStack>
          </HStack>
          <Spacer />
        </VStack>
        <Divider my={2} />
      </Box>
    </Pressable>
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
