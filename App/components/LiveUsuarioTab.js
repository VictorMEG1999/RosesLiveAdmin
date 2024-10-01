import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PantallaConBotones = () => {
  const handleLive = () => {
    console.log('Live seleccionado');
  };

  const handleFiesta = () => {
    console.log('Fiesta seleccionada');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleLive}>
        <Text style={styles.buttonText}>Live</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleFiesta}>
        <Text style={styles.buttonText}>Fiesta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF69B4', // Color rosa
  },
  button: {
    backgroundColor: '#E01983', // Color para los botones
    padding: 20,
    borderRadius: 100, // Bordes redondeados
    margin: 20,
    width: 200, // Ancho del botón
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF', // Color del texto de los botones
    fontSize: 24, // Tamaño de la fuente
  },
});

export default PantallaConBotones;
