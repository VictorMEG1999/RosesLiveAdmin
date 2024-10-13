import {PUSH_USUARIO_GLOBAL, GET_USUAIO}  from "../Types";
export default (state , action) =>  {
     const  { payload, type }  = action ;
    switch  (type)  {
         case  PUSH_USUARIO_GLOBAL: 
         return {
                // ...state, // hace una copia del estado 
                state: payload
            }
            case GET_USUAIO :
                return payload 
    }
}