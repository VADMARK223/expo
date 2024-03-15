/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 15.03.2024
 */
import {View, Text} from 'react-native';

export default function DictionaryItem({data}) {
    console.log('Data', data)
    return (
        <View>
            <Text>View DictionaryItem {data.id}</Text>
        </View>
    );
}