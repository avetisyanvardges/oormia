import { StyleSheet } from 'react-native';
import { Colors, FontStyle } from 'assets/RootStyles';
import { normalize } from 'assets/RootStyles/normalize';

const Styles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.white,
      paddingVertical: normalize(8),
      paddingHorizontal: normalize(8),
      borderRadius: normalize(12),
      marginBottom: normalize(16),
    },
    titleContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      marginHorizontal: normalize(8),
    },
    badgeRightContainer: {},
    badgeContainer: {
      backgroundColor: Colors.green['500'],
      paddingHorizontal: normalize(8),
      borderRadius: normalize(32),
    },
    badgeText: {
      ...FontStyle.title_medium,
      color: Colors.primary_green,
    },
  });
};

export { Styles };
