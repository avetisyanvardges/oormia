import { StyleSheet } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';

const Styles = () => {
  return StyleSheet.create({
    middleIcon: {
      width: normalize(50),
      height: normalize(50),
      borderRadius: normalize(12),
      transform: [{ rotate: '45deg' }],
      justifyContent: 'center',
      alignItems: 'center',
      bottom: normalize(30),
      zIndex: 999,
    },
    buttons: {
      width: 0,
      height: 0,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.purple['500'],
      borderRadius: normalize(8),
      padding: normalize(8),
      position: 'absolute',
    },
  });
};

export { Styles };
