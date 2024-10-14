import React from 'react';
import { FlatList } from 'react-native';
import { Box, NativeBaseProvider } from 'native-base';
import PersonaItem from '../components/MensajesScreen';
import styles from '../styles/MensajesStyles';
import { useNavigation } from '@react-navigation/native';
import { MensajesScreenNavigationProp } from '../navigation/types'; // Mantén esta línea, pero elimina la otra

// Lista de personas con mensaje predeterminado
const personas = [
  { id: '1', nombre: 'Juan Pérez', mensaje: 'Hola, ¿cómo estás?' },
  { id: '2', nombre: 'Ana Gómez', mensaje: '¡Buen día!' },
  { id: '3', nombre: 'Carlos Ruiz', mensaje: 'Nos vemos pronto.' },
  { id: '4', nombre: 'María Fernanda', mensaje: 'Saludos cordiales.' },
  { id: '5', nombre: 'Luis Martínez', mensaje: '¿Qué tal?' },
];

export const MensajesScreen = () => {
  const navigation = useNavigation<MensajesScreenNavigationProp>(); // Tipar el hook

  const handlePress = (usuario: any) => {
    navigation.navigate('ChatScreen', { usuario }); // Navega a la pantalla de chat
  };

  return (
    <NativeBaseProvider>
      <Box style={styles.container}>
        <FlatList
          data={personas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <PersonaItem item={item} onPress={handlePress} />}
        />
      </Box>
    </NativeBaseProvider>
  );
};

export default MensajesScreen;
