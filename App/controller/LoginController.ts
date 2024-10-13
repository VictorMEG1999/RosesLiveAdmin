import firebase from "./firebase"
import { collection, query, where, getDocs, doc, updateDoc } from "firebase/firestore";

// validacion y texto
export const checTex = (text: String, type: String) => {

  const checIcput = [["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "ñ", "o",
    "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "A", "B", "C", "D", "E",
    "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "Ñ", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z",
    ".", "_", "-", "-", "@", " ",
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],

  ["a", "b", "c", "d", "e", "f", "g", "h",
    "i", "j", "k", "l", "m", "n", "ñ", "o",
    "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z", "A", "B", "C", "D", "E",
    "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "Ñ", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z", " ",],

  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "+"]];
  let e
  let temp: any[] = []
  // balidacino de capmos 
  switch (type) {
    case "email":
      temp = checIcput[0]
      break;
    case "text":
      temp = checIcput[1]
      break;
    case "num":
      temp = checIcput[2]
      break;
  }
  if (text !== "") {
    for (let i = 0; i < text.length; i++) {
      for (let ii = 0; ii < temp.length; ii++) {
        if (text[i] == temp[ii]) {
          break
        } else if ((ii + 1) == temp.length) {
          e = ("caracter no valido ")
          break;
        }
      }
    }
  } else {
    e = "campo vacio"
  }
  if (!e) { e = false }
  return e
}


export async function login(email: String, pass: String) {
  let idUser
  let infoUser
  try {
    // construccionde consulta
    const q = query(collection(firebase.db, "usuario"), where("email", "==", email), where("pass", "==", pass));
    const querySnapshot = await getDocs(q)

    if (querySnapshot) {
      querySnapshot.forEach((info) => {

        // documento del usuario 
        infoUser = {
          // id del documento / usario : se usa para crear referencias a la base de datos 
          usuario: {
            idUser: info.id,
            nombre: info.data().nombre,
            numerosStream: info.data().numerosStream,
            email: info.data().email,
            pass: info.data().pass,
            agente: info.data().agente,
            apellido: info.data().apellido,
            borrado: info.data().borrado,
            cuota: info.data().cuota,
            estado: info.data().estado,
            fechaRregistro: info.data().fechaRregistro,
            followNumero: info.data().followNumero,
            follower: info.data().follower,
            gestion: info.data().gestion,
            idUsuarioModificador: info.data().idUsuarioModificador,
            idioma: info.data().idioma,
            ingreso: info.data().ingreso,
            lada: info.data().lada,
            moderador: info.data().moderador,
            monto: info.data().monto,
            nickName: info.data().nickName,
            permiso: info.data().permiso,
            personaRegalaMas: info.data().personaRegalaMas,
            sAdmin: info.data().sAdmin,
            ultimaFechaEntrada: info.data().ultimaFechaEntrada,
            ultimaFechaModificacion: info.data().ultimaFechaModificacion,
            verificado: info.data().verificado
          }
        }
      })
    }

    // actualisa fecha de ultima conexion 
    if (idUser) {
      // referencia usuario ERORR por el tipo de dato id del usario "e"
      const idUserRef = doc(firebase.db, "usuario", idUser);
      // update campo 
      const rest = await updateDoc(idUserRef, {
        ultimaFechaEntrada: Date().toLocaleString()
      });
    }
  } catch (e) {
    console.log(e);
  }

  return infoUser
}

// export const checTexForm = (value, field) => {
//   // Validación del campo (correo o contraseña)
//   if (field === "email" && !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
//     return "El correo no es válido.";
//   }
//   if (field === "pass" && value.length < 6) {
//     return "La contraseña debe tener al menos 6 caracteres.";
//   }
//   return null; // Si es válido
// };