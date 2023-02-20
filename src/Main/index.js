import React, {Fragment} from 'react';
import Navigation from '../navigation';
import {StatusBar, View} from 'react-native';
import {Colors} from '../assets/RootStyles';
import ButtonMy from '../components/button';
import VkIcon from '../assets/img/svg/buttonSvg/VkIcon';
import InstIcon from '../assets/img/svg/buttonSvg/InstIcon';
import FbIcon from '../assets/img/svg/buttonSvg/FbIcon';







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
     <ButtonMy icon={<VkIcon/>} textButton="Logo" onClick={onClick} />
     <ButtonMy icon={<InstIcon/>} textButton="Logo" onClick={onClick} />
     <ButtonMy icon={<FbIcon/>} textButton="Logo" onClick={onClick} />
      <Navigation />
  
    </Fragment>
  );
}

export default Main;
