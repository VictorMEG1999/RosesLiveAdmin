import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Modal, TextInput, Button, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const VentasTab = () => {
  const [paquetes, setPaquetes] = useState([
    { id: "1", nombre: "Paquete 1", cantidad: 100, precio: 20 },
    { id: "2", nombre: "Paquete 2", cantidad: 200, precio: 35 },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPaquete, setSelectedPaquete] = useState(null);
  const [newPaquete, setNewPaquete] = useState({ nombre: "", cantidad: "", precio: "" });

  const handleEditPaquete = (paquete) => {
    setSelectedPaquete(paquete);
    setModalVisible(true); // Abrir modal para editar
  };

  const handleDeletePaquete = (id) => {
    setPaquetes(paquetes.filter((paquete) => paquete.id !== id));
  };

  const handleSavePaquete = () => {
    if (selectedPaquete) {
      setPaquetes(
        paquetes.map((paquete) =>
          paquete.id === selectedPaquete.id ? selectedPaquete : paquete
        )
      );
    } else {
      setPaquetes([...paquetes, { ...newPaquete, id: (paquetes.length + 1).toString() }]);
    }
    setModalVisible(false);
    setSelectedPaquete(null); // Reset selection
    setNewPaquete({ nombre: "", cantidad: "", precio: "" }); // Reset new package fields
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.nombre}</Text>
      <Text style={styles.cell}>{item.cantidad} rosas</Text>
      <Text style={styles.cell}>${item.precio}</Text>
      <Ionicons
        name="pencil"
        size={20}
        color="green"
        onPress={() => handleEditPaquete(item)} // Llamar a handleEditPaquete para editar
      />
      <Ionicons
        name="trash"
        size={20}
        color="red"
        onPress={() => handleDeletePaquete(item.id)} // Llamar a handleDeletePaquete para eliminar
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={styles.header}>Nombre</Text>
        <Text style={styles.header}>Cantidad</Text>
        <Text style={styles.header}>Precio</Text>
        <Text style={styles.header}>Acciones</Text>
      </View>

      <FlatList
        data={paquetes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Crear nuevo paquete</Text>
      </TouchableOpacity>

      {/* Modal para editar o crear paquete */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setModalVisible(false);
          setSelectedPaquete(null);
          setNewPaquete({ nombre: "", cantidad: "", precio: "" });
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              value={selectedPaquete ? selectedPaquete.nombre : newPaquete.nombre}
              onChangeText={(text) =>
                selectedPaquete
                  ? setSelectedPaquete({ ...selectedPaquete, nombre: text })
                  : setNewPaquete({ ...newPaquete, nombre: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Cantidad"
              keyboardType="numeric"
              value={selectedPaquete ? selectedPaquete.cantidad.toString() : newPaquete.cantidad}
              onChangeText={(text) =>
                selectedPaquete
                  ? setSelectedPaquete({ ...selectedPaquete, cantidad: text })
                  : setNewPaquete({ ...newPaquete, cantidad: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Precio"
              keyboardType="numeric"
              value={selectedPaquete ? selectedPaquete.precio.toString() : newPaquete.precio}
              onChangeText={(text) =>
                selectedPaquete
                  ? setSelectedPaquete({ ...selectedPaquete, precio: text })
                  : setNewPaquete({ ...newPaquete, precio: text })
              }
            />

            <View style={styles.buttonContainerModal}>
              <Button
                title="Guardar"
                onPress={handleSavePaquete}
                color="green"
              />
              <Button
                title="Cancelar"
                onPress={() => setModalVisible(false)}
                color="red"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  header: {
    fontWeight: "bold",
    width: "25%",
    color: '#1087e3',
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    width: "25%",
    textAlign: "center",
    color: '#1087e3',
  },
  addButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  addButtonText: {
    color: "white",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color: '#1087e3',
  },
  buttonContainerModal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textpaquetes: {
      flexDirection: "row",
      justifyContent: "space-between",
      color: '#1087e3',
    },
});

export default VentasTab;
