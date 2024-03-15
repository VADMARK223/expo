/**
 * Компонент
 *
 * @author Markitanov Vadim
 * @since 15.03.2024
 */
import {FlatList, SafeAreaView, Text} from 'react-native';
import {useState} from "react";
import DictionaryItem from "./DictionaryItem";

export default function DictionaryScreen() {
    const [words, setWords] = useState([
        {id: 1},
        {id: 2}
    ])

    return (
        <SafeAreaView>
            <FlatList data={words} renderItem={(data)=> <DictionaryItem data={data.item}/>}/>
        </SafeAreaView>
    );
}