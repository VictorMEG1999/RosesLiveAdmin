import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerBuscador: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10, // Ajustar el padding
    height: 40, // Aumentar un poco la altura
    marginVertical: 10,
    justifyContent: 'space-between', // Asegúrate de que el contenido esté espaciado
  },
  icon: {
    marginRight: 10, // Espacio entre el ícono y el texto
    height: 27, // Tamaño del ícono
    width: 27, // Tamaño del ícono
    color: "#E01983",
    marginLeft: 10,
  },
  ubicacionstyle: {
    borderRadius: 30,
    justifyContent: 'center',
    height: 40, // Mantener la altura
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E01983', // Color de fondo para resaltar
  },
  ubicacionTexto: {
    color: '#fff', // Color del texto
    marginLeft: 10, // Espacio entre el ícono y el texto
    fontSize: 16, // Tamaño del texto
  },
  buttonContent: {
    flexDirection: 'row', // Para alinear el ícono y el texto en fila
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
  menuIco: {
    color: 'black', // Color del ícono
  },
});

export default styles;
