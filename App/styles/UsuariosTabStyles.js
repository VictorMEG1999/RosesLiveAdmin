import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 5,
    },
      containerScroll: {
        flex: 1,
      },
      scrollView: {
        flexGrow: 1,
      },
      tabBar: {
          backgroundColor: '#fff',
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarLabel: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        tabIndicator: {
          backgroundColor: '#1087e3',  // Color del indicador activo
          height: 3,                // Grosor de la línea
        },
        mensajeTexto: {
          fontSize: 20,
          color: '#1087e3',
          textAlign: 'center',
          marginTop: 20,
        },
        scrollViewContent: {
          flexGrow: 1,
          justifyContent: 'center', // Centra verticalmente el contenido
          alignItems: 'center', // Centra horizontalmente el contenido
        },



});

export default styles;