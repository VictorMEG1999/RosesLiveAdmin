import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/HeaderUsuarioStyles';

const HeaderUsuario = () => {
  const navigation = useNavigation();
  const [busqueda, setBusqueda] = useState('');

  const buscarUsuario = () => {
    if (busqueda.trim() === '') {
      Alert.alert('Advertencia', 'Por favor ingresa un término de búsqueda.');
    } else {
      Alert.alert('Búsqueda', `Buscando usuario: ${busqueda}`);
      // Aquí puedes integrar la lógica de búsqueda
    }
  };

  return (
    <View style={styles.containerBuscador}>
      {/* Barra de búsqueda */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar usuario"
          value={busqueda}
          onChangeText={setBusqueda}
        />
        <TouchableOpacity onPress={buscarUsuario} style={styles.searchButton}>
          <FontAwesome name="search" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Botón de filtros */}
      <TouchableOpacity onPress={() => navigation.navigate('Filtros')}>
        <FontAwesome name="filter" size={26} style={styles.icon} />
      </TouchableOpacity>

      {/* Menú de configuración */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ConfiguracionUsuario')}>
          <Ionicons name="menu" size={26} style={styles.menuIco} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderUsuario;


