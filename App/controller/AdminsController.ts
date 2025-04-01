import firebase from "./firebase";
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";

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

/**
 *
 * @param selectedUser
 * Metodo para actualizar Usuarios Admin
 */
export async function updateUserAdmin(selectedAdmin:any){
  let myDocRef;

  try {
    //Actualizar un registro (update)

    // Define the collection and document data
    const myCollection = collection(firebase.db, 'admin');
    const myDocumentData = {
      email: selectedAdmin.email,
      estado: selectedAdmin.estado,
      nombre: selectedAdmin.nombre,
      permiso: selectedAdmin.permiso
    };

    // Define the document reference
    myDocRef = doc(myCollection, selectedAdmin.id);

    // Add or update the document
    await setDoc(myDocRef, myDocumentData);

    // Log a success message
    console.log('Document added or updated successfully! - Admin');
  } catch (e) {
    console.log(e);
  }
  return myDocRef;
}