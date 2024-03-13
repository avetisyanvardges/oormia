import { StyleSheet } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';

const Styles = ({ insets }) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      justifyContent: 'center',
      backgroundColor: Colors.purple['500'],
      paddingLeft: normalize(10),
      paddingTop: normalize(40),
      paddingBottom: normalize(10),
    },
    header_content: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      ...FontStyle.text_h3.regular,
      color: Colors.white,
    },
    members: {
      ...FontStyle.text_h6.regular,
      color: Colors.white,
    },
  });
};

export { Styles };
