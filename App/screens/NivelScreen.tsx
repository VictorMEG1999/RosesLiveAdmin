import React, { useState } from 'react';
import { Box, Text, VStack, Progress, NativeBaseProvider, Center } from 'native-base';

export const NivelScreen = () => {
  // Datos de ejemplo para nivel actual y progreso
  const [nivelActual, setNivelActual] = useState(3); // Nivel actual del usuario
  const [experienciaActual, setExperienciaActual] = useState(45); // Experiencia actual del usuario
  const experienciaMaxima = 100; // Experiencia necesaria para el siguiente nivel

  // Cálculo del porcentaje de progreso
  const progreso = (experienciaActual / experienciaMaxima) * 100;

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white" px={5} py={8}>
        <Center>
          <Text bold fontSize="2xl" mb={5}>Mi Nivel</Text>
          <Text fontSize="lg">Nivel Actual: {nivelActual}</Text>
        </Center>

        <VStack space={5} mt={8}>
          {/* Barra de progreso */}
          <Center>
            <Text fontSize="md" mb={2}>Experiencia: {experienciaActual}/{experienciaMaxima}</Text>
            <Progress value={progreso} colorScheme="pink" size="lg" width="80%" />
            <Text fontSize="sm" mt={2}>{progreso.toFixed(2)}% hacia el próximo nivel</Text>
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default NivelScreen;
