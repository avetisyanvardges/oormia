import {StyleSheet, useWindowDimensions} from 'react-native';
import {Colors, Shadow, Sizes} from '../../assets/RootStyle';

const Styles = theme => {
  const {width, height} = useWindowDimensions();
  return StyleSheet.create({
    container: {
      width,
      height,
    },
    featuredEvents: {
      flex: 1,
    },
    header: {
      marginTop: Sizes(50),
      paddingHorizontal: Sizes(10),
      flexDirection: 'row',
      justifyContent: 'center',
    },

    category_container: {
      paddingHorizontal: Sizes(20),
      paddingVertical: Sizes(5),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 14,
      backgroundColor: Colors.white,
      ...Shadow,
    },
    section_container: {
      marginTop: Sizes(12),
      paddingHorizontal: Sizes(10),
    },

    search_container: {
      flex: 1,
      height: Sizes(40),
      borderRadius: 10,
      backgroundColor: Colors.white,
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingHorizontal: Sizes(10),
      marginRight: Sizes(10),
      ...Shadow,
    },

    filter_container: {
      width: Sizes(40),
      height: Sizes(40),
      borderRadius: 10,
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
      ...Shadow,
    },
    filter_by_city: {
      width,
      height: Sizes(70),
      marginTop: Sizes(15),
      flexDirection: 'row',
    },
    city_container: {
      width: Sizes(70),
      height: Sizes(70),
      alignItems: 'center',
      marginRight: Sizes(10),
    },
    disabled_city: {
      opacity: 0.5,
    },
    city_name: {
      fontFamily: 'melorist',
      color: Colors.black,
    },
  });
};

export {Styles};
