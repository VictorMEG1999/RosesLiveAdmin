import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
     containerBuscador: {
        paddingHorizontal: 5,
        height: '44%',
        width: '100%',
        marginVertical: 10,
        flex: 1
      },
      menu: {
        borderWidth: 1,
        borderColor: '#E01983',
        height: '150%',
      },
      menuText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'right',
         height: '150%',
         flex: 1,
      },
      icons: {
        fontSize: 24,
        color: '#E01983',
        top: '18%',
        right: '2%',
      
      },
      buttonv: {
        borderRadius: 60,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#E01983'
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