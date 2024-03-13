import {Pressable, StyleSheet, Text, View} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

export default function Button({label, theme}) {
    if (theme === 'hi') {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={() => alert('Привет!')}>
                    <FontAwesome name={'smile-o'} style={styles.buttonIcon} size={28} color={'#fff'}/>
                    <Text style={[styles.buttonLabel, {color: '#fff'}]}>{label}</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('Привет!')}>
                <FontAwesome name={'volume-control-phone'} style={styles.buttonIcon} size={28} color={'#fff'}/>
                <Text style={[styles.buttonLabel, {color: '#fff'}]}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',
        // marginHorizontal: 20,
        padding: 3,
    },
    button: {
        backgroundColor: '#2196f3',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'row' // Горизонтальное направление элементов
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 26,
        paddingBottom: 0
    },
    buttonIcon: {
        paddingRight: 8
    }
})