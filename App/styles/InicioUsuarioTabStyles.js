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

        container: {
            flex: 1,
            padding: 16,
            backgroundColor: "#f8f9fa",

          },
          title: {
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 16,
            textAlign: "center",
            color: '#1087e3',
          },
          tableHeader: {
            flexDirection: "row",
            backgroundColor: "#1087e3",
            padding: 8,
          },
          row: {
            flexDirection: "row",
            borderBottomWidth: 1,
            borderColor: "#1087e3",
            padding: 8,
          },
          cell: {
            flex: 1,
            textAlign: "center",
            flexDirection: "row",
          },
          header: {
            fontWeight: "bold",
          },
          textCell: {
            fontSize: 15,
            color: 'black',
            flexDirection: "row",
          },
          iconButton: {
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          },
          modalContainer: {
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            modalContent: {
              width: "90%",
              padding: 20,
              backgroundColor: "white",
              borderRadius: 10,
              elevation: 5,
            },
            modalTitle: {
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 15,
            },
            input: {
              height: 45, // Altura del campo de entrada para mayor claridad
                  borderColor: "black", // Color de borde oscuro
                  borderWidth: 2, // Aumentar el grosor del borde
                  borderRadius: 10, // Bordes redondeados
                  paddingLeft: 10, // Añadir espacio para el texto
                  paddingRight: 10, // Añadir espacio en el lado derecho
                  marginBottom: 20, // Separación inferior para los inputs
                  backgroundColor: "#f4f4f4", // Fondo claro para mayor visibilidad
                  color: "#333", // Color del texto dentro del input
            },
            pickerContainer: {
                borderWidth: 1,
                borderColor: "#ddd",
                borderRadius: 10,
                marginBottom: 5,
                backgroundColor: "green", // Fondo blanco para el picker
                width: "50%",
              },
              pickerActivo: {
                              borderWidth: 1,
                              borderColor: "#ddd",
                              borderRadius: 10,
                              marginBottom: 5,
                              backgroundColor: "green", // Fondo blanco para el picker
                              width: "50%",
              },
              pickerInactivo: {
                                            borderWidth: 1,
                                            borderColor: "#ddd",
                                            borderRadius: 10,
                                            marginBottom: 5,
                                            backgroundColor: "gray", // Fondo blanco para el picker
                                            width: "50%",
              },

              // Estilo para el texto dentro del picker
              pickerText: {
                fontSize: 15,
                color: "#333",
              },
            buttonContainer: {
              flexDirection: "row",
              justifyContent: "space-between",
            },
            buttonContainerModal: {
                flexDirection: "row", // Poner los botones en fila
                justifyContent: "space-between", // Separar los botones
                marginTop: 20, // Separación superior para los botones
              },
              button: {
                borderRadius: 20, // Bordes circulares para los botones
                overflow: "hidden", // Asegura que los bordes circulares sean aplicados correctamente
              },



});

export default styles;