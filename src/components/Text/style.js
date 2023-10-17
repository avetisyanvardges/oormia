import {StyleSheet} from 'react-native';
import {Colors, Fonts} from 'assets/RootStyles';

const Styles = () => {
  return StyleSheet.create({
    font: {
      fontFamily: Fonts.arm.regular,
      color: Colors.grey['500'],
    },
  });
};

export {Styles};
