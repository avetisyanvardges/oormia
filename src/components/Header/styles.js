import {StyleSheet} from 'react-native';
import {normalize} from 'assets/RootStyles/normalize';

const Styles = theme => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: normalize(6),
      paddingBottom: normalize(12),
    },
    icon_container: {
      marginRight: normalize(16),
    },
  });
};

export {Styles};
