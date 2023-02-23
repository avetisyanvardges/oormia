import React, { useState } from 'react';
import {KeyboardAvoidingView, TextInput, TouchableOpacity, View} from 'react-native';
import {deviceInfo} from '../../assets/deviceInfo';
import {normalize} from "../../assets/RootStyles/normalize";
import styles from "./style";
import Text from "../text";

function Index({title = '', titleStyle = {}, inputStyle = {}, size, type, placeholder="", value="", inputContainerStyle={}, onChange,onBlur, errorText="", secureTextEntry=false, inputContainer={}, icon="", iconOnClick}) {
    return (
        <KeyboardAvoidingView
            {...(deviceInfo.ios
                ? {
                    behavior: 'padding',
                    keyboardVerticalOffset: normalize(10),
                    enabled: true,
                }
                : {})}
        >
            <View style={{...styles.container, ...inputContainerStyle}}>
                {title ? <Text
                    text={title}
                    style={{
                        position: 'absolute',
                        marginTop: normalize(-30),
                        ...titleStyle
                    }}
                /> : null}
              <View style={{...styles.inputContainerDef, inputContainer }}>
              <TextInput
                    style={{
                        ...styles.inputDefault,
                        ...inputStyle,
                    }}
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    secureTextEntry={secureTextEntry}
                    // onFocus={()=>setFocus?setFocus(true):null}
                    // onBlur={()=>setFocus?setFocus(false):null}
                    // value={text}
                    // editable={!disabled}
                    // onChangeText={setText}
                    // secureTextEntry={secure}
                    // placeholderTextColor={ICON}
                    // placeholder={placeholder || ''}
                    // style={[styles.textStyle, textStyle , {color: ICON}]}
                />
                <TouchableOpacity onPress={iconOnClick}>
                    {icon}
                </TouchableOpacity>
              </View>
                 <Text text={errorText} style={{paddingLeft: 6,  color:"red",}}/>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Index;

