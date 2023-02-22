import React, {Fragment} from 'react';
import Navigation from '../navigation';
import {StatusBar, View} from 'react-native';
import {Colors} from '../assets/RootStyles';
import ButtonMy from '../components/button';
import VkIcon from '../assets/img/svg/buttonSvg/VkIcon';
import InstIcon from '../assets/img/svg/buttonSvg/InstIcon';
import FbIcon from '../assets/img/svg/buttonSvg/FbIcon';
import CodeVerification from '../screens/CodeVerfiication';
import LoginScreen from '../screens/AuthLayer/Login';
import SignUp from '../screens/SignUp';
import Input from '../components/input';






function Main() {

const onClick = ()=>{
  console.log("hay")
}

  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        translucent={false}
        backgroundColor={Colors.oxford_blue['30']}
      />
     
      <SignUp />
    </Fragment>
  );
}

export default Main;
