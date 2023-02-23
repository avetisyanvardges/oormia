import React from 'react'
import {SafeAreaView, StyleSheet, View} from 'react-native'
import {Colors} from "../../assets/RootStyles";
import {deviceInfo} from "../../assets/deviceInfo";

const ScreenMask = ({ children, style }) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.oxford_blue['50'],
            }}>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <View
                    style={{
                        width: deviceInfo.deviceWidth,
                        height: '70%',
                        backgroundColor: Colors.white,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        ...style
                    }}
                >
                    <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>
                </View>
            </View>
        </View>
    )
}

export default ScreenMask
