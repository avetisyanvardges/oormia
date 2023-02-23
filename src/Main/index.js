import React, {Fragment} from 'react';
import Navigation from '../navigation';
import {StatusBar, View} from 'react-native';
import {Colors} from '../assets/RootStyles';

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
