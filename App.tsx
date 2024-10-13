import {napUser} from"./App/navigation/index"
import UsuarioState from "./App/context/usuario/usuarioState"
//import CountainerRoutes from './App/navigation';

export default function App() {
  return (
    
    <UsuarioState>
      {
        napUser()
      }
    </UsuarioState>
  );
}