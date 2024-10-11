import { Container } from "native-base";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../styles/ConfiguracionUsu";
import  Icon  from "react-native-vector-icons/Ionicons";

interface Props{
    name: string;
    icon: string;
    component: string;
}

export const MenuItem=({name, icon, component}: Props)=>{
    return(
        <View>
            <Pressable 
            onPress={()=> console.log('click/tap')}
            >
                <View style={{
                    ...style.Container, 
                   
                }}>
                    <Text style={{color: colors.text}}>{name}</Text>
                    <Icon name='chevron-forward-outline' size={15} style={{marginLeft: 'auto', color: colors.primary}}/>
                </View>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
})