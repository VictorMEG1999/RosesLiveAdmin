import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, ScrollView, SafeAreaView } from 'react-native';

const ListaDeUsuarios = () => {
  // Simulación de datos de usuarios
  const usuarios = Array.from({ length: 20 }, (_, index) => ({
    id: index.toString(),
    nombre: `Usuario ${index + 1}`,
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
         <ScrollView style={styles.scrollView}>
          <View style={styles.usuarioContainer}>
            <Text style={styles.usuarioTexto}>{item.nombre}</Text>
          </View>
          </ScrollView>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAB8E4', // Color de fondo rosa
  },
  usuarioContainer: {
    backgroundColor: '#DA70D6', // Color morado para los usuarios
    borderRadius: 10,
    padding: 20,
    marginVertical: 5,
    width: '100%', // Cambiado a 100% para cubrir todo el ancho de la pantalla
    alignItems: 'center',
  },
  usuarioTexto: {
    color: '#FFFFFF', // Color del texto
    fontSize: 18, // Tamaño de la fuente
  },
  containerScroll: {
          flex: 1,
        },
        scrollView: {
          flexGrow: 1,
        },
});

export default ListaDeUsuarios;

