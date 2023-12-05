import { StyleSheet } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';

export const styles = StyleSheet.create({
  btnBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  screenMask: {
    paddingTop: normalize(20),
    alignItems: 'center',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingHorizontal: normalize(16),
  },
  firstText: {
    ...FontStyle.text_h3.regular,
    color: Colors.black[100],
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  secondText: {
    textAlign: 'center',
    ...FontStyle.text_h5.regular,
    fontSize: normalize(10),
    lineHeight: normalize(12),
    color: Colors.grey[1200],
    marginBottom: normalize(28),
    marginTop: normalize(7),
  },
  button: {
    width: normalize(328),
    height: normalize(38),
    backgroundColor: Colors.blue[900],
  },
  buttonText: {
    fontSize: normalize(14),
    lineHeight: normalize(17),
    color: Colors.white,
  },
  line: {
    backgroundColor: Colors.grey[1100],
    width: normalize(328),
    height: normalize(1),
    marginVertical: normalize(20),
  },
});
