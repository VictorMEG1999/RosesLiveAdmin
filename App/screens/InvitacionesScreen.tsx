import React, { useState } from 'react';
import { NativeBaseProvider,Box, Input, HStack, Icon } from 'native-base';
import Invitaciones from "../components/Invitaciones"; // Componente separado


export const InvitacionesScreen = () => {
  const invitacionesIniciales = [
    { id: '1', nombre: 'Norman', mensaje: 'Quiere ser tu agente' },
    { id: '2', nombre: 'Carlos', mensaje: 'Quiere ser tu agente' },
    { id: '3', nombre: 'Juan', mensaje: 'Quiere ser tu agente' },
    { id: '4', nombre: 'Carla', mensaje: 'Quiere ser tu agente' },
    { id: '5', nombre: 'Martha ', mensaje: 'Quiere ser tu agente' },
    // más invitaciones
  ];

  const [invitaciones, setInvitaciones] = useState(invitacionesIniciales);

  const aceptarInvitacion = (id) => {
    setInvitaciones((prev) =>
      prev.map((item) => (item.id === id ? { ...item, mensaje: 'Invitación aceptada', estado: 'aceptada' } : item))
    );
  };

  const eliminarInvitacion = (id) => {
    setInvitaciones((prev) =>
      prev.map((item) => (item.id === id ? { ...item, mensaje: 'Invitación rechazada', estado: 'rechazada' } : item))
    );
  };

  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p={4}>
        <HStack alignItems="center" mb={4}>
          <Input
            placeholder="Buscar"
            width="100%"
            variant="rounded"
            //InputLeftElement={<Icon as={<Ionicons name="search" />} size={5} ml={2} color="gray.400" />}
          />
        </HStack>
        <Invitaciones invitaciones={invitaciones} onAceptar={aceptarInvitacion} onEliminar={eliminarInvitacion} />
      </Box>
    </NativeBaseProvider>
  );
};

export default InvitacionesScreen;