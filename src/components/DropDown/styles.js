import { StyleSheet } from 'react-native';
import { ITheme } from 'constants/interfaces/themes';
import { Colors, FontStyle } from 'assets/RootStyles';

const Styles = theme => {
  return StyleSheet.create({
    valueText: {
      ...FontStyle.text_h5.regular,
      color: theme?.PRIMARY_TEXT_COLOR,
    },
    placeholderText: {
      ...FontStyle.text_h5.regular,
      color: theme?.PRIMARY_INPUT_LABEL_COLOR,
    },
  });
};

export { Styles };
