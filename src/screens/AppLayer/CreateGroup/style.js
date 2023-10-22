import { StyleSheet } from 'react-native';
import {
  Colors,
  Fonts,
  GradientColors,
  Shadow,
  Sizes,
} from 'assets/RootStyles';
import { deviceInfo } from 'assets/deviceInfo';
import { normalize } from 'assets/RootStyles/normalize';

const Styles = theme => {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    content: {
      height: deviceInfo?.small_screen ? '95%' : '85%',
      paddingHorizontal: normalize(16),
      paddingTop: normalize(16),
      backgroundColor: Colors.white,
      borderTopRightRadius: normalize(24),
      borderTopLeftRadius: normalize(24),
    },
    img_container: {
      position: 'absolute',
      top: normalize(15),
    },
    img_bg: {
      backgroundColor: '#42d7f5',
      width: normalize(70),
      height: normalize(70),
      borderRadius: normalize(35),
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
      width: normalize(60),
      height: normalize(60),
      borderRadius: normalize(30),
      resizeMode: 'cover',
    },
    upload_container: {
      flexDirection: 'row',
      alignItems: 'center',
      height: normalize(45),
    },
    upload_bg: {
      width: normalize(30),
      height: normalize(30),
      borderRadius: normalize(8),
      borderWidth: normalize(0.5),
      borderColor: Colors.grey['200'],
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: normalize(20),
      height: normalize(20),
      resizeMode: 'cover',
    },
    type_container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.oxford_blue['30'],
      borderRadius: normalize(12),
      marginBottom: normalize(10),
      marginTop: normalize(3),
    },
    type: {
      padding: normalize(8),
      backgroundColor: Colors.oxford_blue['50'],
      borderRadius: normalize(8),
    },
    type_press: {
      padding: normalize(7),
      borderRadius: normalize(8),
      alignItems: 'center',
      justifyContent: 'center',
    },
    show_categories: {
      width: normalize(40),
      height: normalize(40),
      borderRadius: normalize(20),
      borderWidth: normalize(0.5),
      borderColor: Colors.grey['100'],
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      right: normalize(10),
    },
    f_container: {
      flexDirection: 'row',
      width: normalize(160),
      height: normalize(60),
      marginVertical: normalize(10),
    },
    f_img: {
      width: normalize(60),
      height: normalize(60),
      borderRadius: normalize(30),
      marginLeft: normalize(15),
    },
    f_title_container: {
      width: normalize(80),
      height: normalize(35),
    },
    f_add: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    f_add_button: {
      width: normalize(15),
      height: normalize(15),
      borderRadius: normalize(7.5),
      borderWidth: normalize(0.5),
      borderColor: Colors.grey['100'],
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: normalize(10),
    },
    f_add_icon: {
      maxWidth: normalize(10),
      maxHeight: normalize(10),
    },
  });
};

export { Styles };
