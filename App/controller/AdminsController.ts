import firebase from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function getAdmins(activos = true) {
  let admins = [];
  try {
    // Construcción de la consulta
    const q = query(
      collection(firebase.db, "admin"),
      where("estado", "==", activos) // Filtra usuarios por estado activo/inactivo
    );
    const querySnapshot = await getDocs(q);

    // Procesar los documentos devueltos
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        admins.push({
          id: doc.id, // ID del documento
          nombre: doc.data().nombre,
          email: doc.data().email,
          estado: doc.data().estado,
          permiso: doc.data().permiso,
          // Agrega otros campos que necesites
        });
      });
    } else {
      console.log("No se encontraron administradores o no tiene permiso para verlos");
    }
  } catch (e) {
    console.error("Error al obtener la lista de administradores:", e);
  }

  return admins;
}
