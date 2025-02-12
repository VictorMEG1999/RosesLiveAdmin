import firebase from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function getUsuarios(activos = true) {
  let usuarios = [];
  try {
    // Construcción de la consulta
    const q = query(
      collection(firebase.db, "usuario"),
      where("estado", "==", activos) // Filtra usuarios por estado activo/inactivo
    );
    const querySnapshot = await getDocs(q);

    // Procesar los documentos devueltos
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        usuarios.push({
          id: doc.id, // ID del documento
          nombre: doc.data().nombre,
          email: doc.data().email,
          nickName: doc.data().nickName,
          estado: doc.data().estado,
          verificado: doc.data().verificado,
          // Agrega otros campos que necesites
        });
      });
    } else {
      console.log("No se encontraron usuarios con el estado especificado.");
    }
  } catch (e) {
    console.error("Error al obtener la lista de usuarios:", e);
  }

  return usuarios;
}
