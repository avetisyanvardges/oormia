import { StyleSheet } from 'react-native';
import { Colors, FontStyle } from 'assets/RootStyles';
import { normalize } from 'assets/RootStyles/normalize';

export const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  time: {
    marginLeft: normalize(10),
    ...FontStyle.display_h6.bold,
  },
  timeText: {
    color: Colors.black[200],
    ...FontStyle.display_h6.regular,
  },
});
