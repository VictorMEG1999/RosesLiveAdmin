import React from 'react';
import { FlatList, Avatar, Text, Button, HStack, VStack } from 'native-base';
import styles from '../styles/InvitacionesStyles'; // Estilos separados

const Invitaciones = ({ invitaciones, onAceptar, onEliminar }) => {
  const renderItem = ({ item }) => (
    <HStack justifyContent="space-between"flex={1} alignItems="center" my={2}>
      <Avatar bg="gray.300" size="lg" />
      <VStack flex={1} mx={3}>
        <Text bold>{item.nombre}</Text>
        <Text>{item.mensaje}</Text>
      
      {!item.estado && (
        <HStack space={2}>
          <Button style={styles.buttonAceptar} size="sm" onPress={() => onAceptar(item.id)}>
            Aceptar
          </Button>
          <Button style={styles.buttonEliminar} size="sm" onPress={() => onEliminar(item.id)}>
            Eliminar
          </Button>
        </HStack>
      )}
      </VStack>
    </HStack>
  );

  return <FlatList data={invitaciones} keyExtractor={(item) => item.id} renderItem={renderItem} />;
};

export default Invitaciones;