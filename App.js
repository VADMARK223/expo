import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import ImageViewer from "./src/ImageViewer";
import Button from "./src/Button"

const PlaceholderImage = require('./assets/and.jpg')

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.greetingsContainer}>
                <Text numberOfLines={2} style={{color: '#fff', textAlign: 'center', fontSize: 28}}>Привет, Андрей!{'\n'}Из
                    приложения Native React!</Text>
            </View>
            <View style={styles.imageContainer}>
                <ImageViewer placeholderImageSource={PlaceholderImage}/>
            </View>
            <View style={styles.buttonsContainer}>
                <Button label={'Поздороваться'}/>
                <Button label={'Созвон?'}/>
            </View>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        alignItems: 'center',
        justifyContent: 'center'
    },
    greetingsContainer: {
        // flex: 1 / 2,
        justifyContent: 'flex-end'
    },
    imageContainer: {
        // flex: 1
    },
    buttonsContainer: {
        // flex: 1
    }
});
