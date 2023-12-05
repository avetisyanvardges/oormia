import { StyleSheet } from 'react-native';
import { Colors, FontStyle, fullScreen } from '../../assets/RootStyles';
import { normalize } from '../../assets/RootStyles/normalize';

export const styles = StyleSheet.create({
  buttonDefaultStyle: {
    width: fullScreen.width - normalize(32),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(24),
    backgroundColor: Colors.purple['500'],
    borderColor: Colors.blue_tint_ec,
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(12),
  },
  textStyle: {
    ...FontStyle.text_h5.regular,
  },
});
