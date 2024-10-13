import React,{ useReducer } from "react";
import usuarioReducer from "./usuarioReducer"
import UsuarioContex from "./usuarioContex";
import GET_USUAEIO from "./usuarioContex";

 const UsuarioState =(props) =>{
    const inisalState  = {
        usuario:null
    };
    const [state, dispatch] = useReducer(usuarioReducer,inisalState);


    const  usuarioGlobal =  async (usuario)=>{
        
         const unfo =  dispatch({
            type: "PUSH_USUARIO_GLOBAL",
            payload: usuario
        })
        return unfo
    }
    const  getUsuario = ()=>{
        return (state)
   }

    return(
        <UsuarioContex.Provider value={{
            usuario:state.usuario,
            usuarioGlobal,
            getUsuario,
        }}>
            {props.children}
        </UsuarioContex.Provider>
    )
}
export default UsuarioState