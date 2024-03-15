/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 14.03.2024
 */
import {Alert, View} from 'react-native';
import {Button} from "@ant-design/react-native";

export default function HomeScreen({navigation}) {
    return (
        <View>
            <Button type={'primary'} onPress={()=>Alert.alert('Good')}>Temp</Button>
        </View>
    );
}