import {StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "./src/screens/HomeScreen";
import DictionaryScreen from "./src/screens/dictionary/DictionaryScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AddScreen from "./src/screens/AddScreen";
import {Ionicons} from "@expo/vector-icons";
import {ADD, FRIENDS, INBOX, MAIN, PROFILE} from "./src/utils/constants";
import {PRIMARY_COLOR} from "./src/utils/styles";
import ProfileScreen from "./src/screens/profile/ProfileScreen";
import FriendsScreen from "./src/screens/friends/FriendsScreen";

// const PlaceholderImage = require('./assets/and.jpg')
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home"
                           screenOptions={({route}) => ({
                                   tabBarIcon: ({focused, color}) => {
                                       let iconName = ''
                                       let size = 24
                                       switch (route.name) {
                                           case MAIN:
                                               iconName = focused ? 'home-sharp' : 'home-outline'
                                               break
                                           case FRIENDS:
                                               iconName = focused ? 'add-circle' : 'add-circle-outline'
                                               break
                                           case ADD:
                                               iconName = focused ? 'add-circle' : 'add-circle-outline'
                                               size = 54
                                               break
                                           case INBOX:
                                               iconName = focused ? 'chatbox-ellipses-sharp' : 'chatbox-ellipses-outline'
                                               break
                                           case PROFILE:
                                               iconName = focused ? 'person-sharp' : 'person-outline'
                                               break
                                       }

                                       return <Ionicons name={iconName} size={size} color={color}/>
                                   },
                                   tabBarActiveTintColor: PRIMARY_COLOR,
                                   tabBarShowLabel: true,
                                   tabBarLabel: ({color}) => {
                                       let title = undefined
                                       switch (route.name) {
                                           case MAIN:
                                               title = 'Главная'
                                               break
                                           case FRIENDS:
                                               title = 'Друзья'
                                               break
                                           case ADD:
                                               title = ''
                                               break
                                           case INBOX:
                                               title = 'Входящие'
                                               break
                                           case PROFILE:
                                               title = 'Профиль'
                                               break
                                       }
                                       return title ? <Text style={{color: color}}>{title}</Text> : undefined
                                   }
                               }
                           )}
            >
                <Tab.Screen name={MAIN} component={HomeScreen} options={{title: 'Главная'}}/>
                <Tab.Screen name={FRIENDS} component={FriendsScreen} options={{title: 'Друзья'}}/>
                <Tab.Screen name={ADD} component={AddScreen} options={{title: ''}}/>
                <Tab.Screen name={INBOX} component={DictionaryScreen} options={{
                    title: 'Входящие',
                    tabBarBadge: '99 +'
                }}/>
                <Tab.Screen name={PROFILE} component={ProfileScreen} options={{
                    title: 'vadmark_in_kyrgyzstan',
                    headerRight: () => (
                        <Ionicons name={'menu'} size={24} style={{paddingRight: 30}}/>
                    )
                }}/>
            </Tab.Navigator>
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
