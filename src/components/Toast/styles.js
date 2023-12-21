import { StyleSheet } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';

const Styles = () => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      zIndex: 9999,
    },
    outerContainer: {
      overflow: 'hidden',
      borderRadius: 40,
    },
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: normalize(8),
      paddingVertical: normalize(12),
      borderRadius: 40,
    },
    image: {
      width: 20,
      height: 20,
    },
    text: {
      color: 'white',
      fontWeight: '600',
      fontSize: 16,
      marginLeft: 12,
      textAlign: 'center',
    },
  });
};

export { Styles };
