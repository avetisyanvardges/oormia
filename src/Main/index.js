import React, {Fragment} from 'react';
import Navigation from '../navigation';
import {StatusBar} from 'react-native';
import {Colors} from '../assets/RootStyles';
import { Text } from 'react-native';

function Main() {

  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        translucent={false}
        backgroundColor={Colors.oxford_blue['30']}
      />
        <Navigation/>
    </Fragment>
  );
}

export default Main;
