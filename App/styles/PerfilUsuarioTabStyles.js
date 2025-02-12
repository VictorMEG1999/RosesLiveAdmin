import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
     containerBuscador: {
             flexDirection: 'row',
             alignItems: 'center',
             paddingHorizontal: 5,
             height: 30,
             marginVertical: 10,
           },
     menuIco: {
        color: 'black',
     },

      icons: {
        fontSize: 24,
        color: '#1087e3',
        top: '18%',
        right: '2%',
      
      },
      buttonv: {
        borderRadius: 60,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#1087e3'
      },
      header:{
        width:"100%",
        height:60,
        flexDirection:"row-reverse",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:20,
      }
});

export default styles;