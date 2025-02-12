import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Modal, TextInput, Button } from "react-native";
import { getLives } from "../controller/LivesController";
import styles from "../styles/InicioUsuarioTabStyles";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
import { format } from "date-fns";

const LivesScreen = () => {
  const [Lives, setLives] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // No es necesario especificar tipo
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchLives = async () => {
      const data = await getLives(true);
      setLives(data);
    };

    fetchLives();
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
       {item.channelName}
     </Text>
     <Text style={[styles.cell, styles.textCell]} numberOfLines={1} ellipsizeMode="tail">
       {item.createdAt ? format(new Date(item.createdAt), "dd/MM/yyyy HH:mm:ss") : "Fecha no disponible"}
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

const formatDate = (date) => {
  if (!date) return "";
  const d = date instanceof Date ? date : date.toDate(); // Convertir Timestamp a Date
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`; // Formato: YYYY-MM-DD
};


  return (
    <View style={styles.container}>
      <View style={styles.tableHeader}>
        <Text style={[styles.cell, styles.header]}>Nombre</Text>
        <Text style={[styles.cell, styles.header]}>Fecha</Text>
        <Text style={[styles.cell, styles.header]}>Estado</Text>
        <Text style={[styles.cell, styles.header]}>Acción</Text>
      </View>
      <FlatList
        data={Lives}
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
              value={selectedUser?.channelName}
              onChangeText={(text) => setSelectedUser({ ...selectedUser, channelname: text })}
            />
           <TextInput
             style={styles.input}
             value={selectedUser?.createdAt ? formatDate(selectedUser.createdAt) : ""}
             onChangeText={(text) =>
               setSelectedUser({
                 ...selectedUser,
                 createdAt: parseDate(text), // Convertir la cadena a un objeto Date o Timestamp si es necesario
               })
             }
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
                  <Picker.Item style={styles.pickerActivo} label="Activo" value="Activo" />
                  <Picker.Item style={styles.pickerInactivo} label="Inactivo" value="Inactivo" />
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

export default LivesScreen;