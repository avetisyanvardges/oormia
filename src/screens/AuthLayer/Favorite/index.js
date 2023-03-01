import React, {useCallback, useState} from "react";
import ScreenMask from "components/screenMask";
import {View, FlatList,  ImageBackground} from "react-native";
import {CustomText} from "components/Text";
import {styles} from "./style"
import {TouchableOpacity} from "react-native-gesture-handler";
import {server as faceData} from "assets/server/server";
import CheckBox from "@react-native-community/checkbox";
import {normalize} from "assets/RootStyles/normalize";


function Favorite({navigation}) {
    const [data, setData] = useState(faceData);

    const onChecked = (item) => {
        setData(data.map((el) => {
            if (item.id === el.id) {
                return {...el, checked: !el.checked}
            }
            return el
        }))
    }

    const Item = useCallback(({item, onChecked}) => {
        return (
            <TouchableOpacity
                onPress={() => onChecked(item)}
                key={item.id}
                style={styles.imgContainer}
            >
                <ImageBackground source={{uri: item.img}}
                                 imageStyle={{borderRadius: normalize(16)}}
                                 resizeMode="cover"
                                 style={styles.image}
                >
                    <CheckBox
                        // tintColors={styles.checkbox}
                        // style={styles.checkbox}
                        value={item.checked}
                        onValueChange={() => onChecked(item)}
                    />
                    <View>
                    <CustomText
                        values={item.title}
                        globalStyle={{
                            ...styles.text,
                            ...styles.imgTitle
                    }}
                    />
                    <CustomText
                        values={item.text+' places'}
                        globalStyle={{
                            ...styles.text,
                            ...styles.places
                    }}
                    />
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }, [])

    return (
        <ScreenMask style={styles.screenMask}>
            <View style={styles.nextContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}>
                    <CustomText values="Prev" globalStyle={styles.nav}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <CustomText values="Next" globalStyle={styles.nav}/>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <CustomText
                    values={`Hi Mort!\nChoose your\nfavorite categories`}
                    globalStyle={styles.title}
                />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.flatList}
                    data={data}
                    renderItem={({item}) => {
                        return <Item item={item} onChecked={onChecked}/>
                    }}/>
            </View>
        </ScreenMask>
    )
}


export default Favorite
