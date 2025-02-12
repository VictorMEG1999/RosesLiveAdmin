import React from "react";
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Obtén el ancho de la pantalla
const screenWidth = Dimensions.get("window").width;




const ReportesTab = () => {
  // Datos ficticios de la gráfica de actividad de usuarios
  const ventas = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    datasets: [
      {
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        strokeWidth: 3, // grosor de la línea
      },
    ],
  };

  const data = {
      labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
      datasets: [
        {
          data: [0, 0, 0, 0, 0, 0, 0, 0, 4, 5, 8, 4],
          strokeWidth: 3, // grosor de la línea
        },
      ],
    };

  const downloadReport = () => {
    // Lógica para descargar el reporte (este es solo un ejemplo de cómo lo podrías manejar)
    console.log("Descargando reporte...");
    // Aquí podrías usar una librería como react-native-fs para guardar el archivo
  };

  return (
    <ScrollView style={styles.container}>
      {/* Título de la pantalla */}
      <Text style={styles.header}>Reportes por mes</Text>

      {/* Gráfica de actividad de usuarios */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Usuarios por mes</Text>
        <LineChart
          data={data}
          width={screenWidth - 60} // ajustamos el tamaño de la gráfica
          height={200}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#E01983",
            backgroundGradientTo: "#ffc107",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
        />
      </View>

      {/* Botón para descargar reporte */}
      <View style={styles.downloadContainer}>
        <Text style={styles.downloadText}>Descargar reporte de usuarios</Text>
        <TouchableOpacity style={styles.downloadButton} onPress={downloadReport}>
          <Ionicons name="download" size={24} color="white" />
          <Text style={styles.downloadButtonText}> Descargar</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.chartContainer}>
              <Text style={styles.chartTitle}>Ventas por mes</Text>
              <LineChart
                data={ventas}
                width={screenWidth - 60} // ajustamos el tamaño de la gráfica
                height={200}
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#E01983",
                  backgroundGradientTo: "#E01983",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#ffa726",
                  },
                }}
                bezier
              />
            </View>

            {/* Botón para descargar reporte */}
            <View style={styles.downloadContainer}>
              <Text style={styles.downloadText}>Descargar reporte de ventas</Text>
              <TouchableOpacity style={styles.downloadButton} onPress={downloadReport}>
                <Ionicons name="download" size={24} color="white" />
                <Text style={styles.downloadButtonText}> Descargar</Text>
              </TouchableOpacity>
            </View>

      {/* Opciones adicionales */}
      <View style={styles.additionalOptions}>
        <Button title="Ver más reportes" onPress={() => console.log("Ver más reportes")} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
     color: '#1087e3',
  },
  chartContainer: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
     color: '#1087e3',
  },
  downloadContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  downloadText: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#1087e3',
  },
  downloadButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,

  },
  downloadButtonText: {
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
  additionalOptions: {
    marginTop: 20,
  },
});

export default ReportesTab;

