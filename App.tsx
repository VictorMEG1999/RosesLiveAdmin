import React, {useState} from 'react';

import {
 View, ScrollView,
 StyleSheet, TextInput,
 Button,
} from 'react-native';
// conecion de firebase
import firebase from './App/controller/firebase'

// import firestore from '@react-native-firebace/firebace'

function App() {

  // inicialisacion de estado 
  const [state, setState] = useState({
    user:"",
    emaill:"",
    phone:"",
  });
  //  metodo de acptura de datos de los TextBox
  const handleChangeText = (name, value) =>{
    setState({...state,[name]:value})
  }

  const saveNewUser = async () =>{

    // balidacino de capmos 
    // if(state.user==="" || state.emaill==="" || state.phone===""){
    //   alert("Faltan datos")
    // }else{
      try {
      
      alert("h1");
        await firebase.db.collection('usuarios').add({
        name:state.user,
        emaill:state.emaill,
        phone:state.phone,
      })
      alert("h2");
      
      } catch (e) {
        console.log(e);
        
      }
    // }

  }

  return(
    <ScrollView style={styles.conteinGrup}>
      <View style={styles.inputGroup}>
        <TextInput 
          placeholder='Name user'
          onChangeText={(value)=> handleChangeText('user',value)}
          />
      </View>
      <View style={styles.inputGroup}>
        <TextInput 
          onChangeText={(value)=> handleChangeText('emaill',value)}
          placeholder='E-maill user'
          />
      </View>
      <View style={styles.inputGroup}>
        <TextInput 
          placeholder='Phone user'
          onChangeText={(value)=> handleChangeText('phone',value)}
          />
      </View>
      <View>
        <Button title='save user' onPress={()=> saveNewUser()} />
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },

  inputGroup:{
    flex: 1,
    padding: 0,
    marginBottom:15,
    borderBottomWidth:1,
    borderBottomColor: '#ccc'
  },
  conteinGrup:{
    flex:1,
    padding:30,
  }
});

export default App;