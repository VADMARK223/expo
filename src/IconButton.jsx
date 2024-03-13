import {StyleSheet, Pressable, Text} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";

export default function IconButton({icon, label}) {
    return (
        <Pressable style={styles.iconButton}>
            <MaterialIcons name={icon} size={54} color={'#fff'}/>
            <Text>{label}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})