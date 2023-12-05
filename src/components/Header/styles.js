import { StyleSheet } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, Shadow } from 'assets/RootStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Styles = theme => {
  const insets = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: insets.top + normalize(6),
      paddingBottom: normalize(12),
      paddingHorizontal: normalize(16),
    },
    icon_container: {
      marginRight: normalize(16),
      width: normalize(30),
      height: normalize(30),
      borderRadius: normalize(20),
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      ...Shadow,
    },
  });
};

export { Styles };
