import React from 'react';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonTextStyle: {
    ...FontStyle.display_h6.regular,
    fontSize: normalize(16),
    color: Colors.white,
  },
  activeCountryBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  body: {
    flex: 1,
    paddingBottom: normalize(10),
  },
  btnCountry: {
    fontSize: normalize(20),
  },
  btnText: {
    ...FontStyle.display_h6.regular,
    fontSize: normalize(14),
  },

  upload: {
    marginLeft: normalize(10),
    ...FontStyle.display_h6.regular,
    fontSize: normalize(16),
  },
  titleBlock: {
    marginTop: normalize(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleSkip: {
    ...FontStyle.display_h6.regular,
    fontSize: normalize(16),
    color: Colors.gray,
  },
  imgDef: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 50,
  },
  title: {
    ...FontStyle.display_h6.regular,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(8),
  },
  imgContainer: {
    marginVertical: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: normalize(50),
    height: normalize(50),
    borderRadius: normalize(50),
  },
  buttonStyle: {},
});
