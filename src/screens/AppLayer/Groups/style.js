import { StyleSheet } from "react-native";
import { Colors, Fonts, GradientColors, Shadow, Sizes } from "assets/RootStyle";

const styles = theme => {
  return StyleSheet.create({
    flex_1: {
      flex: 1,
    },
    header: {
      width: '100%',
      height: '30%',
      marginTop: Sizes(120),
    },
    profile_info: {
      flex: 1,
      marginTop: Sizes(20),
      alignItems: 'center',
    },
    profile: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: Sizes(20),
    },
    profileImage: {
      alignItems: 'center',
      marginVertical: Sizes(25),
    },
    profileTabs: {
      flex: 1,
      alignItems: 'center',
      borderRadius: 15,
      backgroundColor: Colors.white,
      ...Shadow,
    },

    userImage: {
      width: Sizes(120),
      height: Sizes(120),
      borderRadius: Sizes(60),
    },
    content: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
    },
    buttons: {
      flex: 1,
      marginVertical: 10,
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    btAsk: {
      backgroundColor: Colors.white,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '35%',
      height: Sizes(40),
      borderRadius: Sizes(10),
      marginHorizontal: Sizes(10),
      ...Shadow,
    },
    btFallow: {
      backgroundColor: GradientColors.second,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '45%',
      height: '100%',
      borderRadius: 4,
    },
    btText: {
      fontSize: Sizes(16),
      fontFamily: Fonts.bold,
      color: GradientColors.second,
    },
  });
};

export {styles};
