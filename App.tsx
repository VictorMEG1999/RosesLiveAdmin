import React, {useState} from 'react';

import {
 View, ScrollView,
 StyleSheet, TextInput,
 Button,
 SafeAreaView,
 StatusBar,
 Text,
 useColorScheme,
} from 'react-native';
// conecion de firebase
import firebase from './App/controller/firebase'

import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Colors,DebugInstructions,
  Header,LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.conteinGrup}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go Settings" onPress={() => navigation.navigate('Settings')}/>
      </View>
    </ScrollView>
    
  );
}

function SettingsScreen({ navigation }) {

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
        await firebase.db.collection('usuarios').add({
        name:state.user,
        emaill:state.emaill,
        phone:state.phone,
      })
      alert("save user");
      
      } catch (e) {
        console.log(e);
        
      }
    // }

  }
  return (
    <ScrollView style={styles.conteinGrup}>
      <View style={styles.inputGroup}>
        <TextInput style={styles.inputText} 
          placeholder='Name user'
          onChangeText={(value)=> handleChangeText('user',value)}
          />
      </View>
      <View style={styles.inputGroup}>
        <TextInput style={styles.inputText} 
          onChangeText={(value)=> handleChangeText('emaill',value)}
          placeholder='E-maill user'
          />
      </View>
      <View style={styles.inputGroup}>
        <TextInput style={styles.inputText} 
          placeholder='Phone user'
          onChangeText={(value)=> handleChangeText('phone',value)}
          />
      </View>
      <View>
        <Button title='save user' onPress={()=> saveNewUser()} />
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>
      </View>
    </ScrollView>

   
  );
}


// import firestore from '@react-native-firebace/firebace'

function App() {

  
  return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Settings" component={SettingsScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}


const styles = StyleSheet.create({

  inputText: {
    backgroundColor:"#058066",
    color:'white',
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