import { StyleSheet } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';
import { deviceInfo } from 'assets/deviceInfo';

const styles = StyleSheet.create({
  btnSearch: {
    marginLeft: normalize(10),
  },
  container: {
    justifyContent: 'flex-start',
  },
  inputContainerDef: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.oxford_blue['30'],
    borderRadius: normalize(7),
    borderWidth: 1.5,
    borderColor: Colors.oxford_blue['30'],
    paddingHorizontal: normalize(12),
  },
  inputDefault: {
    flex: 1,
    height: normalize(42.5),
    color: Colors.grey['500'],
    ...FontStyle.text_h5.regular,
    lineHeight: deviceInfo.ios ? 0 : normalize(20),
  },
  label: {
    color: Colors.grey['300'],
  },
  errBlock: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    height: normalize(3),
  },
  labelStyle: {
    // width: RW(330),
    // paddingVertical: 0,
    // ...font('regular', 16, WHITE, 18),
  },
});

export default styles;
