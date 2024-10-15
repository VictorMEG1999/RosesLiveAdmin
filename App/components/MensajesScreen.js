// src/components/PersonaItem.tsx

import React from 'react';
import { HStack, Text, VStack } from 'native-base';
import { TouchableOpacity } from 'react-native';

interface Persona {
  id: string;
  nombre: string;
  mensaje: string;
}

interface PersonaItemProps {
  item: Persona;
  onPress: (usuario: Persona) => void; // Para manejar la acción de presionar
}

const PersonaItem: React.FC<PersonaItemProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <HStack
        bg="gray.100"
        borderRadius={10}
        px={4}
        py={2}
        my={2}
        alignItems="center"
        justifyContent="space-between"
      >
        <VStack>
          <Text fontSize="md" bold>{item.nombre}</Text>
          <Text color="gray.500">{item.mensaje}</Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};

export default PersonaItem;
