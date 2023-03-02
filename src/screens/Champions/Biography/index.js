import React from 'react';
import {Image, Text, View, ScrollView} from "react-native";
import styles from "./style";

function Index({route}) {

    const data = route.params;

    return (
        <View style={styles.container}>
            <View style={styles.imgBlock}>
                <View style={styles.imgBg}>
                    <Image source={{uri: data.photo}} style={styles.img}/>
                </View>
                <View style={styles.titleBlack}>
                    <View style={styles.titleInfoBlack}>
                        <Image source={{uri: data.sportImage}} style={styles.sportImage}/>
                        <Text style={styles.flagTitle}>{data.sport}</Text>
                    </View>
                    <View style={styles.titleInfoBlack}>
                        <View style={styles.imageFlagContainer}>
                            <Image source={{uri: data.flag}} style={styles.imageFlag}/>
                        </View>
                        <Text style={styles.flagTitle}>{data.country}</Text>
                    </View>
                    <View style={{
                        ...styles.titleInfoBlack,
                        borderRightWidth: null,
                    }}>
                        <View style={styles.imageFlagContainer}>
                            <Image source={{uri: data.flag}} style={styles.imageFlag}/>
                        </View>
                        <Text style={styles.flagTitle}>{data.championsDate}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.biography}>
                <View style={styles.infoContainerTitle}>
                    <Text style={styles.infoContainerName}>{data.lName+' '+data.fName}</Text>
                    <Text style={styles.infoContainerText}>Birth {data.birthDay}</Text>
                    <Text style={styles.infoContainerText}>Champion {data.championsDate}</Text>
                    <Text style={styles.infoContainerText}>Height {data.height} m</Text>
                    <Text style={styles.infoContainerText}>Weight{data.weight} Kg</Text>
                </View>
                <ScrollView style={{marginTop:20}}>
                    <Text  style={styles.infoContainerText}>
                        {data.career}
                    </Text>

                </ScrollView>
            </View>
        </View>
    );
}

export default Index;
