import firebase from "./firebase"
import { collection , query, where, getDocs, addDoc } from "firebase/firestore";

  // validacion y texto
export const checTex =  (text: String, type:String) =>{
    
    const checIcput = [["a","b","c","d","e","f","g","h",
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
                        "1","2","3","4","5","6","7","8","9"],
                        ["a","b","c","d","e","f","g","h",
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
                        "U","V","W","X","Y","Z"],
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

  
export async function search (campo: string,valorvalue: string) {
    let e
    try {
      // construccionde consulta
      const q = query(collection(firebase.db, "usuario"), where(campo, "==", valorvalue));
      const querySnapshot = await getDocs(q)
      // recorido de resultados
      querySnapshot.forEach((docx) => {
        e= docx.id ;
      });
    } catch (e) {
      console.log(e);
    }
    if (e){
        e = true
    }
     return e
  }

  export  async function  SalveUserData(nombre:String, numerosStream:String, email:String, pass:string){
    console.log("nombre = ", numerosStream, " email = ",email," pass = ", pass);
    
    const docRef = await addDoc(collection(firebase.db, "usuario"), {
        nombre : nombre,
        numerosStream :numerosStream,
        email :email,
        pass : pass
      });
      return docRef 
  }