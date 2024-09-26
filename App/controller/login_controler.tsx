import firebase from "./firebase"
import { collection , query, where, getDocs } from "firebase/firestore";

  // validacion y texto
export  const checTex =  (text: String) =>{
  const checIcput = [ "a","b","c","d","e","f","g","h",
                      "i","j","k","l","m","n","ñ","o",
                      "p","q","r","s","t","u","v","w",
                      "x","y","z","A","B","C","D","E",
                      "F","G","H","I","J","K","L","M",
                      "N","Ñ","O","P","Q","R","S","T",
                      "U","V","W","X","Y","Z",".","-",
                      "a","b","c","d","e","f","g","h",
                      "i","j","k","l","m","n","ñ","o",
                      "p","q","r","s","t","u","v","w",
                      "x","y","z","A","B","C","D","E",
                      "F","G","H","I","J","K","L","M",
                      "N","Ñ","O","P","Q","R","S","T",
                      "U","V","W","X","Y","Z",".","_",
                      "-","@",0,1,2,3,4,5,6,7,8,9,"0",
                      "1","2","3","4","5","6","7","8","9"];
  let e 
  // balidacino de capmos 
  if(text!==""){
    for (let i = 0; i < text.length; i++) {
      for (let ii = 0; ii < checIcput.length; ii++) {       
        if(text[i] == checIcput[ii]){
          break
        }else if ((ii+1) == checIcput.length){
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
  try {
    // construccionde consulta
    const q = query(collection(firebase.db, "usuario"), where("email", "==", email), where("contraseña", "==", pass));
    const querySnapshot = await getDocs(q)
    // recorido de resultados
    querySnapshot.forEach((doc) => {
      e= doc.id ;
    });
  } catch (e) {
    console.log(e);
  }
   return e
}