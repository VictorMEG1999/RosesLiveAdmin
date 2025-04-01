import firebase from "./firebase";
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";

export async function getAgentes(activos = true) {
  let agentes = [];
  try {
    // Construcción de la consulta
    const q = query(
      collection(firebase.db, "agentes"),
      where("estado", "==", activos) // Filtra usuarios por estado activo/inactivo
    );
    const querySnapshot = await getDocs(q);

    // Procesar los documentos devueltos
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        agentes.push({
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
      console.log("No se encontraron agentes con el estado especificado.");
    }
  } catch (e) {
    console.error("Error al obtener la lista de agentes:", e);
  }

  return agentes;
}

/**
 *
 * @param nombre
 * Metodo para actualizar Agentes Activos
 */
export async function updateAgentesActivos(selectedAgentes:any){
  let myDocRef;

  try {
    //Actualizar un registro (update)

    // Define the collection and document data
    const myCollection = collection(firebase.db, 'agentes');
    const myDocumentData = {
      email: selectedAgentes.email,
      estado: selectedAgentes.estado,
      nickName: selectedAgentes.nickName,
      nombre: selectedAgentes.nombre,
      verificado: selectedAgentes.verificado
    };

    // Define the document reference
    myDocRef = doc(myCollection, selectedAgentes.id);

    // Add or update the document
    await setDoc(myDocRef, myDocumentData);

    // Log a success message
    console.log('Document added or updated successfully! - Agentes');
  } catch (e){
    console.log(e);
  }
  return myDocRef;
}