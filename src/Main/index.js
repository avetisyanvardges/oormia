import React, {Fragment} from 'react';
import Navigation from '../navigation';
import {StatusBar, View} from 'react-native';
import {Colors} from '../assets/RootStyles';
import ButtonMy from '../components/button';
import { FB,IN } from '../assets/svg/buttonSvg/buttonSvgConstant';





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
      <ButtonMy textButton="knopka" svgIconType={IN} onClick={onClick} />
      <Navigation />
    </Fragment>
  );
}

export default Main;
