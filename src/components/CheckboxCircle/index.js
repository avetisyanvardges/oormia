import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import {Colors} from 'assets/RootStyles';

function Index({isChecked = false}) {
  return (
    <View
      style={{
        ...styles.body,
        borderColor: isChecked ? Colors.blue[900] : Colors.gray,
      }}>
      {isChecked ? <View style={styles.check} /> : null}
    </View>
  );
}

export default Index;
