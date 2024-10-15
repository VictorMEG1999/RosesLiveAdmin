import React, { useState, useRef } from 'react';
import { FlatList } from 'react-native';
import { Box, Text, HStack, VStack, NativeBaseProvider, Button, Input } from 'native-base';

interface Mensaje {
  id: string;
  texto: string;
  usuario: 'A' | 'B'; // A y B representan dos personas
  hora: string;
}

export const ChatScreen = () => {
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    { id: '1', texto: 'Hola, ¿cómo estás?', usuario: 'A', hora: '10:00 AM' },
    { id: '2', texto: '¡Hola! Estoy bien, ¿y tú?', usuario: 'B', hora: '10:02 AM' },
  ]);
  const [mensajeActual, setMensajeActual] = useState('');
  const [usuarioActual, setUsuarioActual] = useState<'A' | 'B'>('A');

  // Referencia para la FlatList
  const flatListRef = useRef<any>(null);

  const enviarMensaje = () => {
    if (mensajeActual.trim() !== '') {
      const nuevoMensaje: Mensaje = {
        id: (mensajes.length + 1).toString(),
        texto: mensajeActual,
        usuario: usuarioActual,
        hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMensajes([...mensajes, nuevoMensaje]);
      setMensajeActual('');
      setUsuarioActual(usuarioActual === 'A' ? 'B' : 'A');

      // Desplazarse al final de la lista, si la referencia no es nula
      setTimeout(() => {
        if (flatListRef.current) {
          flatListRef.current.scrollToEnd({ animated: true });
        }
      }, 100);
    }
  };

  const renderItem = ({ item }: { item: Mensaje }) => (
    <HStack justifyContent={item.usuario === 'A' ? 'flex-start' : 'flex-end'}>
      <VStack 
        bg={item.usuario === 'A' ? 'blue.100' : 'green.100'} 
        borderRadius={10} 
        px={4} 
        py={2} 
        my={2} 
        maxWidth="80%"
      >
        <Text>{item.texto}</Text>
        <Text fontSize="xs" color="gray.500" textAlign="right">{item.hora}</Text>
      </VStack>
    </HStack>
  );

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white" p={4}>
        {/* Lista de mensajes */}
        <FlatList
          ref={flatListRef}
          data={mensajes}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          ///inverted // Esto invierte la lista para que los mensajes recientes aparezcan al final
        />

        {/* Input y botón de envío */}
        <HStack mt={4} space={2} alignItems="center">
          <Input
          borderRadius={10}
            flex={1}
            placeholder="Escribe un mensaje"
            value={mensajeActual}
            onChangeText={setMensajeActual}
          />
          <Button borderRadius={10} bgColor={"#9119E0"} onPress={enviarMensaje}>
            Enviar
          </Button>
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
};
