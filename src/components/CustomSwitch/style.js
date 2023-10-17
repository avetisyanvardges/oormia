import {StyleSheet} from 'react-native';
import {normalize} from 'assets/RootStyles/normalize';

const Styles = theme => {
  return StyleSheet.create({
    container: {
      width: normalize(50),
      height: normalize(28),
      borderRadius: normalize(30),
      justifyContent: 'center',
      backgroundColor: '#F2F5F7',
    },
    circle: {
      width: normalize(24),
      height: normalize(24),
      borderRadius: normalize(30),
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2.5,
      elevation: 4,
    },
  });
};

export {Styles};
