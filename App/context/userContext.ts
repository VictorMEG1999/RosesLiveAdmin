import React,{ createContext, useReducer,  } from "react"


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

const usuarioReducer = (state = inisalState, paylod) => {
    switch (paylod.type) {
        // login
        case "sing-in":
            console.log("bienbenido al sistemas");
            return { ...state, usuario: paylod.data, activo:true}
        //  nuebo usuario
        case "sing":
            console.log("usuario guardado");
            return { ...state, usuario: paylod.data, activo:true}
        // serar ceson  
        case "sing-out":
            console.log("secion expirada");
            return { ...state, usuario: paylod.data, activo:false}
    }
}
const UserContext = createContext(inisalState)

function usuarioProvider(props) {
    const[login,loginAction]= useReducer(usuarioReducer,inisalState)
    return(
        <UserContext.Provider value={[login,loginAction]}>
            {props.children}
        </UserContext.Provider>

    )
}

export { usuarioContext, usuarioProvider, UserContext };