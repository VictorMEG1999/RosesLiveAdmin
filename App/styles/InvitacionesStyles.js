import { Avatar } from 'native-base';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  buttonAceptar: {
    backgroundColor: '#ff007f',
    borderRadius:10,
    width:"120px", // Ajusta el ancho del botón
    height:"500", // Ajusta la altura del botón
     py:3// Ajusta el padding vertical
  },
  buttonEliminar: {
    backgroundColor: '#7b00ff',
    borderRadius:10,
    width:"120px", // Ajusta el ancho del botón
    height:"500", // Ajusta la altura del botón
     py:3// Ajusta el padding vertical
  },
  Avatar:{
        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }
});

export default styles;