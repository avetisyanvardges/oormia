import { StyleSheet } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';

export const styles = StyleSheet.create({
  buttonStyle: {},
  buttonTextStyle: {
    ...FontStyle.display_h6.regular,
    fontSize: normalize(16),
    color: Colors.white,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    // height:'100%'
    // height:normalize(200),
    // padding:normalize(13),
    // justifyContent:'space-between'
  },
  flatList: {
    // flexDirection:'row',
    // flexWrap:'wrap',
    // justifyContent:'space-between',
    // alignItems:'center'
    backgroundColor: 'blue',
    marginTop: normalize(10),
    // marginHorizontal:10,
    padding: normalize(10),
  },
  title: {
    ...FontStyle.display_h6.bold,
    fontSize: normalize(18),
    color: Colors.black[50],
  },
  nav: {
    ...FontStyle.display_h6.bold,
    fontSize: normalize(16),
    color: Colors.black[50],
  },
  screenMask: {
    // padding: normalize(13),
  },
  nextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(16),
  },
  imgContainer: {
    width: normalize(140),
    flexDirection: 'row',
    marginHorizontal: normalize(10),
    marginVertical: normalize(10),
  },
  text: {
    color: Colors.red,
    ...FontStyle.display_h4.medium,
  },
  imgTitle: {
    fontSize: normalize(20),
    lineHeight: normalize(20),
  },
  places: {
    fontSize: normalize(16),
    color: Colors.grey[1200],
    lineHeight: normalize(20),
  },
});
