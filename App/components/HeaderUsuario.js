import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Hook para navegación
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import Geolocation from 'react-native-geolocation-service';
import { request, PERMISSIONS } from 'react-native-permissions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/HeaderUsuarioStyles';

const HeaderUsuario = () => {
  const navigation = useNavigation(); // Hook para acceder a la navegación
  const [ubicacionActiva, setUbicacionActiva] = useState(false);

  const activarUbicacion = async () => {
    try {
      const permission = await request(
        Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
      );

      if (permission === 'granted') {
        Geolocation.getCurrentPosition(
          (position) => {
            setUbicacionActiva(true);
            Alert.alert('Ubicación activada', `Latitud: ${position.coords.latitude}, Longitud: ${position.coords.longitude}`);
          },
          (error) => {
            Alert.alert('Error al obtener ubicación', error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else {
        Alert.alert('Permiso denegado', 'Por favor habilita el permiso de ubicación.');
      }
    } catch (error) {
      Alert.alert('Error', 'Hubo un problema al activar la ubicación.');
    }
  };

  return (
    <View style={styles.containerBuscador}>
      {/* Botón con ícono para activar la ubicación */}
      <TouchableOpacity onPress={activarUbicacion} style={[styles.ubicacionstyle, { backgroundColor: ubicacionActiva ? '#E01983' : 'gray' }]}>
        <View style={styles.buttonContent}>
          <Entypo name="location-pin" size={30} color="#fff" />
          <Text style={styles.ubicacionTexto}>Activar ubicación</Text>
        </View>
      </TouchableOpacity>

      {/* Navegar a LenguajesUsuario al presionar el ícono */}
      <TouchableOpacity onPress={() => navigation.navigate('Idiomas')}>
        <Fontisto name="world" size={26} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ConfiguracionUsuario')}>
          <Ionicons name="menu" size={26} style={styles.menuIco} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderUsuario;

