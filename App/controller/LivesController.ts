import firebase from "./firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function getLives(activos = true) {
  let lives = [];
  try {
    // Construcción de la consulta
    const q = query(
      collection(firebase.db, "lives"),
      where("estado", "==", activos) // Filtra usuarios por estado activo/inactivo
    );
    const querySnapshot = await getDocs(q);

    // Procesar los documentos devueltos
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        lives.push({
          id: doc.id, // ID del documento
          channelName: doc.data().channelName,
          createdAt: doc.data().createdAt?.toDate() || new Date(),
          estado: doc.data().estado,
          creator: doc.data().creator,
          // Agrega otros campos que necesites
        });
      });
  console.log("Lives obtenidos:", lives);
    } else {
      console.log("No se encontraron Lives o no tiene permiso para verlos");
    }
  } catch (e) {
    console.error("Error al obtener la lista de Lives:", e);
  }

  return lives;
}