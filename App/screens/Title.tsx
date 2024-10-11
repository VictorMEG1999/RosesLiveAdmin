import {Text, View} from 'react-native';
import styles from '../styles/ConfiguracionUsu';

interface Props{
    text: string;
    safe?: boolean;
    white?: boolean; 
}

export const Title = ({text, safe, white}: Props) => {
    return(
        <View>
            <Text style={{ ...styles.title, }}> 
                {text}
            </Text>
        </View>
    )


}