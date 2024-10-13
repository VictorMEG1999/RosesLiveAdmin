import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const ConfiguracionUsuario = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona un idioma</Text>
      {/* Agrega aquí las opciones de idiomas */}
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Español</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Inglés</Text>
      </TouchableOpacity>
      {/* Puedes seguir añadiendo más idiomas */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#E01983',
    borderRadius: 5,
  },
  optionText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ConfiguracionUsuario;
