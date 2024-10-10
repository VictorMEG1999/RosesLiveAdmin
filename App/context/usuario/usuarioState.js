import React,{ useReducer } from "react";
import usuarioReducer from "./usuarioReducer"
import UsuarioContex from "./usuarioContex";

 const UsuarioState =(props) =>{
    const inisalState = {
        usuario: {
            nombre: "",
            numerosStream: "",
            email: "",
            pass: "",
            agente: false,
            apellido: "",
            borrado: false,
            cuota: 0,
            estado: false,
            fechaRregistro: "",
            followNumero: 0,
            follower: 0,
            gestion: 0,
            idUsuarioModificador: "",
            idioma: ["español"],
            ingreso: 0,
            lada: 0,
            moderador: 0,
            monto: 0,
            nickName: "",
            permiso: false,
            personaRegalaMas: "",
            sAdmin: false,
            ultimaFechaEntrada: "",
            ultimaFechaModificacion: "",
            verificado: false,
        },
        activo:false
    }
    const infochec = 0
    const [state, dispatch] = useReducer(usuarioReducer,inisalState)


    const getUsuario =()=>{
        console.log("usuarioContext");
        
    }
    const getPerfil =()=>{}

    return(
        <UsuarioContex.Provider value={{
            usuario:state.usuario,
            infochec,
            getUsuario,
            getPerfil,
        }}>
            {props.children}
        </UsuarioContex.Provider>
    )



}
export default UsuarioState