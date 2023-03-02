import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "./styles";

function Index({item, navigation}) {

    return (
        <TouchableOpacity
            onPress={()=>navigation.navigate('Biography', item)}
            style={styles.itemContainer}
        >
            <View style={styles.titleBlack}>
                <View style={styles.imageContainer}>
                    <Image source={{uri: item.photo}} style={styles.image} />
                </View>
                <View style={styles.sportBlock}>
                    <Image source={{uri: item.sportImage}} style={styles.sportImage} />
                    <Text style={styles.sportTitle}>{item.sport}</Text>
                </View>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoContainerTitle}>
                    <Text style={styles.infoContainerName}>{item.lName+' '+item.fName}</Text>
                    <Text style={styles.infoContainerText}>Birth {item.birthDay}</Text>
                    <Text style={styles.infoContainerText}>Champion {item.championsDate}</Text>
                    <Text style={styles.infoContainerText}>Height {item.height} m</Text>
                    <Text style={styles.infoContainerText}>Weight{item.weight} Kg</Text>
                </View>
                <View style={styles.flagBlock}>
                    <View  style={styles.imageFlagContainer}>
                        <Image source={{uri: item.flag}} style={styles.imageFlag} />
                    </View>
                    {Array.from({length: item.country.length}).map((el, i) => {
                        return (
                            <Text key={i} style={styles.flagTitle}>{item.country[i]}</Text>
                        );
                    })}
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default Index;
