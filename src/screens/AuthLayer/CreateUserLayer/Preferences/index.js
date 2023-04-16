import React, {useCallback, useState} from "react";
import ScreenMask from "components/screenMask";
import {View, FlatList, ImageBackground, SafeAreaView, ScrollView} from "react-native";
import {CustomText} from "components/Text";
import {styles} from "./style"
import {TouchableOpacity} from "react-native-gesture-handler";
import {server as faceData} from "assets/server/server";
import CheckBox from "@react-native-community/checkbox";
import {normalize} from "assets/RootStyles/normalize";
import BtnGoBack from "components/BtnGoBack";
import Button from "components/Button";
import {routNames} from "constants/routNames";


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

    const Item = useCallback(({item, onChecked, i, startMin}) => {
        return (
            <TouchableOpacity
                onPress={() => onChecked(item)}
                key={item.id}
                style={{...styles.imgContainer, height:startMin?data.length%2===0?normalize(i%2===0?200:140):normalize(i%2===0?140:200):normalize(i%2===0?200:140)}}
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
                            values={item.id}
                            globalStyle={{
                                ...styles.text,
                                ...styles.imgTitle
                            }}
                        />
                        <CustomText
                            values={item.text + ' places'}
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
                <BtnGoBack/>
                <CustomText globalStyle={styles.title} values={'Hi David!'}/>
                <CustomText values={'Skip'}/>
            </View>
            <View style={styles.container}>
                <CustomText
                    values={`Choose your\nfavorite categories`}
                    globalStyle={{...styles.title, textAlign: 'center'}}
                />
                <ScrollView>
                    <View style={{
                        flexDirection:'row'
                    }}>
                        <View style={{
                            width:'50%',
                            height:'100%'
                        }}>
                            { data.map((item, i)=>{
                                if(i>=data.length/2){
                                    return null
                                }
                                return <Item key={i} item={item} i={i} onChecked={onChecked}/>
                            })}
                        </View>
                        <View style={{
                            width:'50%',
                            height:'100%',
                            // backgroundColor:'blue'
                        }}>
                            { data.map((item, i)=>{
                                if (i<data.length/2){
                                    return null
                                }
                                return <Item startMin={true} key={i} item={item} i={i} onChecked={onChecked}/>
                            })}
                        </View>

                    </View>
                </ScrollView>

                <Button
                    styleButton={styles.buttonStyle}
                    textButton="Save"
                    textStyle={styles.buttonTextStyle}
                    onClick={()=>{
                        // navigation.navigate(routNames.FAVORITE)
                    }}
                    // disabled={!(isValid && dirty && img)}
                />
                {/* {*/}
                {/*    <ScrollView  style={{*/}
                {/*        */}
                {/*        backgroundColor:'red',*/}
                {/*    }}>*/}
                {/*        { data.map((item, i)=><Item item={item} i={i} onChecked={onChecked}/>)}*/}
                {/*    </ScrollView>*/}
                {/*}*/}
                {/*<FlatList*/}
                {/*    numColumns={2}*/}
                {/*    showsVerticalScrollIndicator={false}*/}
                {/*    style={styles.flatList}*/}
                {/*    data={data}*/}
                {/*    renderItem={({item, index}) => {*/}
                {/*        return <Item item={item} index={index} onChecked={onChecked}/>*/}
                {/*    }}/>*/}
            </View>
        </ScreenMask>
    )
}


export default Favorite
