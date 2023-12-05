import { StyleSheet } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, Shadow } from 'assets/RootStyles';

const Styles = theme => {
  return StyleSheet.create({
    container: {
      height: '110%',
    },
    mapStyle: {
      flex: 1,
      aspectRatio: 1,
    },
    userLocationButton: {
      position: 'absolute',
      zIndex: 100,
      width: normalize(36),
      height: normalize(36),
      right: normalize(15),
      top: normalize(40),
      backgroundColor: Colors.white,
      borderRadius: normalize(20),
      justifyContent: 'center',
      alignItems: 'center',
      ...Shadow,
    },
  });
};

export { Styles };
