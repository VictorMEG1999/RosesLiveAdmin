import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 5,
    },
    containerBuscador: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        height: 30,
        marginVertical: 10,
      },
      inputContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#E01983',
          borderRadius: 30,
          paddingHorizontal: 1,
          height: '150%',
          flex: 3,
        },
        viewFiltro: {
            flexDirection: 'row',
            alignItems: 'center',
            height: '150%',
            width: '10%',
        },
      icon: {
        marginRight: 1,
        marginLeft: 4,
        height: '60%',
        width: '17%',
        color: "#E01983",
        flex: 1,
      },
      menu: {
          borderWidth: 1,
          borderColor: '#E01983',
          height: '150%',
          flex: 1,
      },
        buscador: {
          paddingHorizontal: 4,
          flex: 7,
          fontSize: 14,
          height: '150%',
        },
    containerCuadro: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
      },
      tabBarTop: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E01983',
      },
      cuadroCargando: {
        width: '48%', // Ajusta este porcentaje para cambiar el tamaño
        height: 100, // Altura del cuadro
        backgroundColor: '#ccc', // Color gris
        borderRadius: 10, // Bordes redondeados
        marginBottom: 10, // Espacio entre filas
      },
      containerScroll: {
        flex: 1,
      },
      scrollView: {
        flexGrow: 1,
      },
      tabBar: {
          backgroundColor: '#fff', // Fondo del TabBar
          elevation: 5,            // Sombra en Android
          shadowColor: '#000',      // Sombra en iOS
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        tabBarLabel: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        tabIndicator: {
          backgroundColor: '#E01983',  // Color del indicador activo
          height: 3,                // Grosor de la línea
        },
});

export default styles;