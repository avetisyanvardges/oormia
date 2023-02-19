import React from 'react';
import {Text} from 'react-native';
import styleDefault from "./style";

function Index({text, style = {}}) {
    return (
        <Text
            style={{
                ...styleDefault.textDefaultStyle,
                ...style,
            }}>
            {text}
        </Text>
    );
}

export default Index;

