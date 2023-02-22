import React from 'react';
import {Text} from 'react-native';
import styles from "./style";

function Index({text, style = {}}) {
    return (
        <Text
            style={{
                ...styles.textDefaultStyle,
                ...style,
            }}>
            {text}
        </Text>
    );
}

export default Index;

