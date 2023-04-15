import React, {useCallback, useState} from 'react';
import {
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {deviceInfo} from 'assets/deviceInfo';
import {normalize} from 'assets/RootStyles/normalize';
import styles from './style';
import {CustomText} from '../Text';
import Icon from 'components/Svgs';
import {ICON_NAMES} from 'components/Svgs/icon_names';
import {Colors} from "assets/RootStyles";

function Index({
                   title = '',
                   titleStyle = {},
                   secure = false,
                   onBlur,
                   errorText,
                   placeholder = '',
                   value = '',
                   inputContainerStyle = {},
                   onChange,
                   search,
               }) {

    const [viewPassword, setViewPassword] = useState(true);
    return (
        <KeyboardAvoidingView
            {...(deviceInfo.ios
                ? {
                    behavior: 'padding',
                    keyboardVerticalOffset: normalize(10),
                    enabled: true,
                }
                : {})}>
            <View style={{...styles.container, ...inputContainerStyle}}>
                {title ? (
                    <CustomText
                        values={title}
                        globalStyle={{
                            ...styles.title,
                            ...titleStyle,
                        }}
                    />
                ) : null}
                <View style={{
                    ...styles.inputContainerDef,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        {search?
                            <TouchableOpacity style={styles.btnSearch}>
                                <Icon name={ICON_NAMES.ASSETS_SVG.SEARCH}/>
                             </TouchableOpacity>
                            :null}
                        <TextInput
                            style={{
                                ...styles.inputDefault,
                            }}
                            placeholder={placeholder}
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            secureTextEntry={secure && viewPassword}
                        />
                        {
                            !search?
                            secure  ?
                                <TouchableOpacity onPress={() => setViewPassword(!viewPassword)}>
                                    {<Icon
                                        name={viewPassword ? ICON_NAMES.INPUT_BTN.EYE_CLOSE : ICON_NAMES.INPUT_BTN.EYE_OPEN}/>}
                                </TouchableOpacity> :
                                <TouchableOpacity onPress={() => onChange('')}>
                                    {<Icon name={ICON_NAMES.INPUT_BTN.CLEAR}/>}
                                </TouchableOpacity>:null
                        }
                    </View>
                    {search? <View style={{
                        ...styles.errBlock,
                        backgroundColor: Colors.gray
                    }}/>:
                    value ? <View style={{
                        ...styles.errBlock,
                        backgroundColor: errorText ? Colors.red : Colors.green[600]
                    }}/> : null}
                </View>
            </View>
            {
                value && !search?<CustomText values={errorText?errorText:'Support message'} globalStyle={{
                    color:errorText?Colors.red:Colors.gray
                }}/>:null
            }
        </KeyboardAvoidingView>
    );
}

export default Index;
