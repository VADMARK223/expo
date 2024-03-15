import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import ImageViewer from "./src/ImageViewer";
import Button from "./src/Button"
import IconButton from "./src/IconButton";
import CircleButton from "./src/CircleButton";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "./src/screens/HomeScreen";
import {SettingsScreen} from "./src/screens/SettingsScreen";
import DictionaryScreen from "./src/screens/dictionary/DictionaryScreen";

// const PlaceholderImage = require('./assets/and.jpg')
const Drawer = createDrawerNavigator();

export default function App() {
    return (
        // <View style={{flex:1}}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeScreen} options={{title:'Главная'}} />
                    <Drawer.Screen name="Settings" component={SettingsScreen} options={{title:'Настройки'}}/>
                    <Drawer.Screen name="Dictionary" component={DictionaryScreen} options={{title:'Словарь'}}/>
                </Drawer.Navigator>
                {/*<StatusBar style="auto"/>*/}
            </NavigationContainer>
            // <StatusBar style="auto"/>
        // </View>

        /*<View style={styles.container}>
            <View style={styles.greetingsContainer}>
                <Text numberOfLines={2} style={{color: '#fff', textAlign: 'center', fontSize: 28}}>Привет, Андрей!{'\n'}Из
                    приложения Native React!</Text>
            </View>
            <View style={styles.imageContainer}>
                <ImageViewer placeholderImageSource={PlaceholderImage}/>
            </View>
            <View style={styles.buttonsContainer}>
                <Button label={'Поздороваться'} theme={'hi'}/>
                <Button label={'Созвон?'}/>
            </View>

            <View style={styles.optionsContainer}>
                <View style={styles.optionRow}>
                    <IconButton icon={'refresh'} label={'Презесвонить'}/>
                    <CircleButton/>
                    <IconButton icon={'save-alt'} label={'Сохрнанить'}/>
                </View>
            </View>

            <StatusBar style="auto"/>
        </View>*/
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#25292e',
        backgroundColor: '#fff',
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
    },
    optionsContainer: {
        // backgroundColor: 'red',
        position: 'absolute',
        bottom: 0
    },
    optionRow: {
        flexDirection: 'row'
    }
});
