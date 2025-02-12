import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Modal, TextInput, Button } from "react-native";
import { getAdmins } from "../controller/AdminsController";
import styles from "../styles/InicioUsuarioTabStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";


const TopAdmin = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const data = await getAdmins(true); // Solo usuarios activos
      setUsuarios(data);
    };

    fetchUsuarios();
  }, []);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setModalVisible(true); // Abrir el modal para editar
  };

  const handleSaveUser = () => {
    console.log("Guardar usuario:", selectedUser);
    // Aquí puedes agregar la lógica para guardar el usuario editado
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={[styles.cell, styles.textCell]} numberOfLines={1} ellipsizeMode="tail">
        {item.nombre}
      </Text>
      <Text style={[styles.cell, styles.textCell]} numberOfLines={1} ellipsizeMode="tail">
        {item.email}
      </Text>
      <Text style={[styles.cell, styles.textCell]}>
        {item.estado === 1 || item.estado === true ? "Activo" : "Inactivo"}  {/* Maneja diferentes posibles valores */}
      </Text>
      <Ionicons
        name="pencil"
        size={20}
        color="green"
        onPress={() => handleEditUser(item)} // Llamar a handleEditUser para editar
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={[styles.cell, styles.header]}>Nombre</Text>
        <Text style={[styles.cell, styles.header]}>Email</Text>
        <Text style={[styles.cell, styles.header]}>Estado</Text>
        <Text style={[styles.cell, styles.header]}>Acción</Text>
      </View>
      <FlatList
        data={usuarios}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {/* Modal para editar el usuario */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              value={selectedUser?.nombre}
              onChangeText={(text) => setSelectedUser({ ...selectedUser, nombre: text })}
            />
            <TextInput
              style={styles.input}
              value={selectedUser?.email}
              onChangeText={(text) => setSelectedUser({ ...selectedUser, email: text })}
            />
            <View>
              <Text style={styles.pickerText}>Estado</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedUser?.estado ? "Activo" : "Inactivo"}
                  onValueChange={(itemValue) => {
                    const estado = itemValue === "Activo"; // Cambia el estado a booleano
                    setSelectedUser({ ...selectedUser, estado });
                  }}
                >
                  <Picker.Item label="Activo" value="Activo" />
                  <Picker.Item label="Inactivo" value="Inactivo" />
                </Picker>
              </View>
            </View>

            <View>
              <Text style={styles.pickerText}>Permisos</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={selectedUser?.permiso === 0 ? "Todo" :
                    selectedUser?.permiso === 1 ? "Reportes" :
                    selectedUser?.permiso === 2 ? "Usuarios" :
                    "Moderador"}
                  onValueChange={(itemValue) => {
                    let permisoValue = 0;

                    // Asignación de valores numéricos según la opción seleccionada
                    switch (itemValue) {
                      case "Todo":
                        permisoValue = 0;
                        break;
                      case "Reportes":
                        permisoValue = 1;
                        break;
                      case "Usuarios":
                        permisoValue = 2;
                        break;
                      case "Moderador":
                        permisoValue = 3;
                        break;
                      default:
                        permisoValue = 0;
                        break;
                    }

                    setSelectedUser({ ...selectedUser, permiso: permisoValue });
                  }}
                >
                  <Picker.Item label="Todo" value="Todo" />
                  <Picker.Item label="Reportes" value="Reportes" />
                  <Picker.Item label="Usuarios" value="Usuarios" />
                  <Picker.Item label="Moderador" value="Moderador" />
                </Picker>
              </View>
            </View>

            <View style={styles.buttonContainerModal}>
              <Button
                title="Guardar"
                onPress={handleSaveUser}
                color="green" // Cambiar color a verde
              />
              <Button
                title="Cancelar"
                onPress={() => setModalVisible(false)}
                color="red" // Cambiar color a rojo
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TopAdmin;