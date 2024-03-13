import { StyleSheet } from 'react-native';
import { Colors, Fonts } from 'assets/RootStyles';
import { normalize } from 'assets/RootStyles/normalize';

const Styles = insets => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      paddingBottom: insets.bottom + normalize(60),
    },
    content: {
      paddingHorizontal: normalize(16),
    },
    heading: {
      fontFamily: Fonts.arm.semi_bold,
      fontSize: normalize(16),
      marginVertical: normalize(10),
    },
    text: {
      fontFamily: Fonts.arm.regular,
      fontSize: normalize(16),
      color: Colors.gray['800'],
    },
  });
};

export { Styles };
