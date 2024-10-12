import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

// Lista de nombres aleatorios
const nombres = [
  'Carlos', 'Lucía', 'Pedro', 'Ana', 'Miguel', 'Sofía',
  'Fernando', 'Laura', 'Javier', 'Gabriela', 'Diego', 'Valeria',
  'Raúl', 'María', 'Pablo', 'Clara', 'Andrés', 'Marta', 'Roberto', 'Daniela'
];

// Lista de países aleatorios
const paises = [
  'Argentina', 'México', 'España', 'Colombia', 'Perú',
  'Brasil', 'Chile', 'Venezuela', 'Uruguay', 'Paraguay',
];

// Lista de URLs de avatares aleatorios (se pueden reemplazar por URLs reales o imágenes locales)
const avatares = [
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/3.jpg',
  'https://randomuser.me/api/portraits/women/3.jpg',
  'https://randomuser.me/api/portraits/men/4.jpg',
  'https://randomuser.me/api/portraits/women/4.jpg',
  'https://randomuser.me/api/portraits/men/5.jpg',
  'https://randomuser.me/api/portraits/women/5.jpg',
];

const ListaDeUsuarios = () => {
  // Simulación de datos de usuarios
  const usuarios = Array.from({ length: 20 }, (_, index) => ({
    id: index.toString(),
    nombre: nombres[Math.floor(Math.random() * nombres.length)], // Nombre aleatorio
    nivel: Math.floor(Math.random() * 10) + 1, // Nivel aleatorio entre 1 y 10
    puntos: '500,000',
    pais: paises[Math.floor(Math.random() * paises.length)], // País aleatorio
    avatar: avatares[Math.floor(Math.random() * avatares.length)], // Avatar aleatorio
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={styles.usuarioContainer}>
            {/* Mostrar ranking solo para los primeros 3 usuarios */}
            {index < 3 ? (
              <Text style={styles.rank}>{index + 1}</Text>
            ) : (
              <Text style={styles.rankVacio}></Text>
            )}
            
            {/* Avatar del usuario */}
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            
            <View style={styles.userInfo}>
              <Text style={styles.usuarioTexto}>#{item.nombre}</Text>
              <View style={styles.nivelPuntosContainer}>
                <Text style={styles.nivel}>Lv{item.nivel}</Text>
                <Text style={styles.puntos}>{item.puntos}</Text>
              </View>
            </View>
            <Text style={styles.pais}>{item.pais}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAB8E4', // Color de fondo rosa
    paddingHorizontal: 10,
  },
  usuarioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Fondo blanco para cada fila
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  rank: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700', // Color dorado para el ranking
    width: 30,
    textAlign: 'center',
  },
  rankVacio: {
    width: 30,
    textAlign: 'center',
  },
  avatar: {
    width: 50, // Ancho del avatar
    height: 50, // Altura del avatar
    borderRadius: 25, // Hacer el avatar circular
    marginHorizontal: 10, // Espacio entre el ranking y la información del usuario
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  usuarioTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"black"
  },
  nivelPuntosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  nivel: {
    backgroundColor: '#FF69B4', // Fondo rosa para el nivel
    color: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
    marginRight: 10,
  },
  puntos: {
    fontSize: 14,
    color: '#000000',
  },
  pais: {
    backgroundColor: '#9370DB', // Fondo morado para el país
    color: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
  },
});

export default ListaDeUsuarios;
