import React from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen} from"./App/screens/Login"
import {registro_usuario} from"./App/screens/registro-usuario"
import {napUser} from"./App/navigation/index"
//import CountainerRoutes from './App/navigation';

//function App() {
  //return 
    //<CountainerRoutes/>;  
//}
//export default App;

//Screens

//function CountainerRoutes() {
    //return {
        //<NavigationContainer>
        //<Stack.Navigator initialRouteName='Login'>
           // <Stack.Screen name= "Login" component= {LoginScreen} />
           // <Stack.Screen name= "registro_usuario" component= {registro_usuario} />
        //</Stack.Navigator>
        //</NavigationContainer>
    //};
//}

//export default CountainerRoutes;

const Stack = createNativeStackNavigator();

function App() {
  return (
    napUser()
  );
}
export default App;

