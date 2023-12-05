import { StyleSheet } from 'react-native';
import { Colors, FontStyle } from '../../../assets/RootStyles';
import { normalize } from 'assets/RootStyles/normalize';

const Styles = theme => {
  return StyleSheet.create({
    underlineStyleBase: {
      width: normalize(45),
      height: normalize(45),
      borderRadius: normalize(10),
      backgroundColor: Colors.oxford_blue['30'],
      borderWidth: 0,
      borderBottomWidth: normalize(1),
      color: Colors.black,
      ...FontStyle.display_h6.regular,
    },

    underlineStyleHighLighted: {
      borderColor: Colors.oxford_blue['300'],
    },
  });
};

export { Styles };
