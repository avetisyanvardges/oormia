import React, {useEffect, useState} from 'react';
import {FlatList, Text, View,} from "react-native";
import styles from './style'
import {olympicsChampions} from "./data";
import Item from "./Item";

function Index({navigation}) {
    const [medalists, setMedalists] = useState([]);
    useEffect(() => {
        fetch('https://olympicdata.herokuapp.com/api/v1/medalists/top')
            .then(response => response.json())
            .then(data => setMedalists(data.medalists))
            .catch(error => console.error(error));
    }, []);

    console.log(medalists)
    return (
        <View>
            <Text>Top 10 Olympic Medalists of All Time</Text>
            {medalists.map((medalist, index) => (
                <View key={index}>
                    <Text>{medalist.name} ({medalist.country})</Text>
                    <Text>{medalist.sport}: {medalist.gold} Gold, {medalist.silver} Silver, {medalist.bronze} Bronze</Text>
                </View>
            ))}
        </View>
    );
}

export default Index;
