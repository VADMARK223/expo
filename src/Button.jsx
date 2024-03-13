import {Pressable, StyleSheet, Text, View} from "react-native";

export default function Button({label}) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('Привет!')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        // backgroundColor: 'gray',
        width: 320,
        height: 68,
        alignItems: 'center',
        justifyContent: 'center',
        // marginHorizontal: 20,
        padding: 3,
    },
    button: {
        backgroundColor: 'gray',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        // flexDirection: 'row'
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16
    }
})