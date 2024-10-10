import { useContext } from "react";
import firebase from "./firebase"
import { collection , query, where, getDocs, doc,updateDoc } from "firebase/firestore";
import  UsuarioContex from "../context/usuario/usuarioContex";
import UsuarioState from "../context/usuario/usuarioState";
// validacion y texto
  export const checTex =  (text: String, type:String) =>{
    
    const checIcput = [["a","b","c","d","e","f","g","h",
                        "i","j","k","l","m","n","ñ","o",
                        "p","q","r","s","t","u","v","w",
                        "x","y","z","A","B","C","D","E",
                        "F","G","H","I","J","K","L","M",
                        "N","Ñ","O","P","Q","R","S","T",
                        "U","V","W","X","Y","Z",
                        ".","_","-","-","@"," ",
                         0,1,2,3,4,5,6,7,8,9,
                        "0","1","2","3","4","5","6","7","8","9"],
                        
                        ["a","b","c","d","e","f","g","h",
                        "i","j","k","l","m","n","ñ","o",
                        "p","q","r","s","t","u","v","w",
                        "x","y","z","A","B","C","D","E",
                        "F","G","H","I","J","K","L","M",
                        "N","Ñ","O","P","Q","R","S","T",
                        "U","V","W","X","Y","Z"," ",],
                        
                        [1,2,3,4,5,6,7,8,9,0,"+"]];
    let e 
    let temp:any[] = []
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
    if(text!==""){
      for (let i = 0; i < text.length; i++) {
        for (let ii = 0; ii < temp.length; ii++) {       
          if(text[i] == temp[ii]){
            break
          }else if ((ii+1) == temp.length){
            e = ("caracter no valido "+ text[i])
            break;
          }
        }
      }
    }else{
      e="campo vacio"
    }
    if (!e){e=false}
    return e
  }

export async function login(email: String,pass: String) {
  let e
  const { infochec } = useContext(UsuarioContex)
  
  try {
    // construccionde consulta
    const q = query(collection(firebase.db, "usuario"), where("email", "==", email), where("pass", "==", pass));
    const querySnapshot = await getDocs(q)
    console.log(infochec);
    


    // recorido de resultados
    querySnapshot.forEach((info) => {

       
      
   
      
// varGlobal.idUser = info.data().info.id
// varGlobal.nombre = info.data().nombre
// varGlobal.numerosStream = info.data().numerosStream
// varGlobal.email = info.data().email
// varGlobal.pass = info.data().pass
// varGlobal.agente = info.data().agente
// varGlobal.apellido = info.data().apellido
// varGlobal.borrado = info.data().borrado
// varGlobal.cuota = info.data().cuota
// varGlobal.estado = info.data().estado
// varGlobal.fechaRregistro = info.data().fechaRregistro
// varGlobal.followNumero = info.data().followNumero
// varGlobal.follower = info.data().follower
// varGlobal.gestion = info.data().gestion
// varGlobal.idUsuarioModificador = info.data().idUsuarioModificador
// varGlobal.idioma = info.data().idioma
// varGlobal.ingreso = info.data().ingreso
// varGlobal.lada = info.data().lada
// varGlobal.moderador = info.data().moderador
// varGlobal.monto = info.data().monto
// varGlobal.nickName = info.data().nickName
// varGlobal.permiso = info.data().permiso
// varGlobal.personaRegalaMas = info.data().personaRegalaMas
// varGlobal.sAdmin = info.data().sAdmin
// varGlobal.ultimaFechaEntrada = info.data().ultimaFechaEntrada
// varGlobal.ultimaFechaModificacion = info.data().ultimaFechaModificacion
// varGlobal.verificado = info.data().verificado
      
      e= info.id ;      
    });
    if(e) {
      // actualisa fecha de ultima conexion 
      // referencia usuario ERORR por el tipo de dato id del usario "e"
      // update campo ultimaFechaEntrada
    }
  } catch (e) {
    console.log(e);
  }
   return e
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