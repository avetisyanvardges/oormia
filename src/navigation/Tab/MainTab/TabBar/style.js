import {StyleSheet} from 'react-native';
import {normalize} from 'assets/RootStyles/normalize';

const Styles = () => {
  return StyleSheet.create({
    middleIcon: {
      width: normalize(50),
      height: normalize(50),
      borderRadius: 14,
      transform: [{rotate: '45deg'}],
      justifyContent: 'center',
      alignItems: 'center',
      bottom: normalize(25),
      // backgroundColor: Colors.gradientStart,
      // shadowColor: Colors.black,
      // shadowOffset: {width: 2, height: 2},
      // elevation: 8,
      zIndex: 999,
    },
  });
};

export {Styles};
