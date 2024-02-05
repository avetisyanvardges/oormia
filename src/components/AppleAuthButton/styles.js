import { StyleSheet } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, Shadow } from 'assets/RootStyles';

export const Styles = () => {
  return StyleSheet.create({
    socialItems: {
      padding: normalize(10),
      backgroundColor: Colors.white,
      marginHorizontal: normalize(10),
      borderRadius: normalize(24),
      alignItems: 'center',
      justifyContent: 'center',
      ...Shadow,
    },
  });
};
