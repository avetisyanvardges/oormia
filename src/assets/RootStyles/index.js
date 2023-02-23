import {normalize} from './normalize';
import {deviceInfo} from '../deviceInfo';

export const Colors = {
  white: '#ffffff',
  black: {
    50: '#000000',
    100: "#2C2C2C",
    200: "#818195",
  },
  green: {
    50: '#eff8ea',
    100: '#cdeabf',
    200: '#b4df9f',
    300: '#92d174',
    400: '#7dc859',
    500: '#5dba2f',
    600: '#55a92b',
    700: '#428421',
    800: '#33661a',
    900: '#274e14',
  },
  grey: {
    50: '#e9e9e9',
    100: '#bcbcbc',
    200: '#9b9b9b',
    300: '#6e6e6e',
    400: '#515151',
    500: '#262626',
    600: '#232323',
    700: '#1b1b1b',
    800: '#151515',
    900: '#101010',
    1000: "#F3F3F3",
    1100: "#E3E3E3",
    1200: "#818195",
  },
  oxford_blue: {
    30: '#F5F5F5',
    50: '#e7e9ec',
    100: '#b3bbc4',
    200: '#8e9ba7',
    300: '#5b6d7f',
    400: '#3b5166',
    500: '#0a2540',
    600: '#09223a',
    700: '#071a2d',
    800: '#061423',
    900: '#04101b',
  },
  blue: {
    50: '#edf5fb',
    100: '#c8def3',
    200: '#aecfee',
    300: '#89b9e6',
    400: '#72abe1',
    500: '#4f96d9',
    600: '#4889c5',
    700: '#386b9a',
    800: '#2b5377',
    900: '#213f5b',
  },
  orange: {
    50: '#fff5eb',
    100: '#fee0c2',
    200: '#fed1a4',
    300: '#fdbb7b',
    400: '#fdae61',
    500: '#fc9a3a',
    600: '#e58c35',
    700: '#b36d29',
    800: '#8b5520',
    900: '#6a4118',
  },
  red: '#fc4447',
  primary_green: '#5DBA2F',
  primary_green_024: 'rgba(93, 186, 47, 0.5)',
  shadow: '#00000007',
  black_tint: '#262626',
  black_tint_5: '#555555',
  black_tint_84: '#848484',
  black_tint_c1: '#C1C1C1',
  blue_tint: '#0A2540',
  blue_tint_d1: '#D1DFEC',
  blue_tint_ec: '#ECF3FB',
  blue_tint_f6: '#F6F9FC',
  gray: '#D9D9D9',
  lilac: "#A347FF",
};

// export const ToastColors = {
//   [toastMessageTypes.ERROR]: {
//     background: '#FEE1E3',
//     border: '#EA3841',
//     borderLight: '#F8B0B4',
//   },
//   [toastMessageTypes.WARNING]: {
//     background: '#FFFAE7',
//     border: '#EBA825',
//     borderLight: '#FFC737',
//   },
//   [toastMessageTypes.INFO]: {
//     background: '#F6F9FC',
//     border: '#4173A5',
//     borderLight: '#D1DFEC',
//   },
//   [toastMessageTypes.SUCCESS]: {
//     background: '#EEFFF3',
//     border: '#55AD2A',
//     borderLight: '#B1E4BF',
//   },
// };

export const Fonts = {
  arm: {
    black: 'Montserratarm2-Black',
    bold: 'Montserratarm2-Bold',
    extraBold: 'Montserratarm2-ExtraBold',
    extraLight: 'Montserratarm2-ExtraLight',
    light: 'Montserratarm2-Light',
    medium: 'Montserratarm2-Medium',
    regular: 'Montserratarm2-Regular',
    semi_bold: 'Montserratarm2-SemiBold',
    thin: 'Montserratarm2-Thin',
  },
};

export const globalStyles = {
  flex_1: {
    flex: 1,
  },
  flex_align_center: {
    flex: 1,
    alignItems: 'center',
  },
  flex_justify_center: {
    flex: 1,
    justifyContent: 'center',
  },
  flex_center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mh16: {
    marginHorizontal: normalize(16),
  },
  ph16: {
    paddingHorizontal: normalize(16),
  },
};

export const FontStyle = {
  display_h1: {
    regular: {
      fontFamily: Fonts.arm.regular,
      fontWeight: '400',
      fontSize: normalize(72),
      lineHeight: normalize(90),
      letterSpacing: -2,
    },
    medium: {
      fontFamily: Fonts.arm.medium,
      fontWeight: '500',
      fontSize: normalize(72),
      lineHeight: normalize(90),
      letterSpacing: -2,
    },
    semi_bold: {
      fontFamily: Fonts.arm.semi_bold,
      fontWeight: '600',
      fontSize: normalize(72),
      lineHeight: normalize(90),
      letterSpacing: -2,
    },
    bold: {
      fontFamily: Fonts.arm.bold,
      fontWeight: '700',
      fontSize: normalize(72),
      lineHeight: normalize(90),
      letterSpacing: -2,
    },
  },
  display_h2: {
    regular: {
      fontFamily: Fonts.arm.regular,
      fontWeight: '400',
      fontSize: normalize(60),
      lineHeight: normalize(72),
      letterSpacing: -2,
    },
    medium: {
      fontFamily: Fonts.arm.medium,
      fontWeight: '500',
      fontSize: normalize(60),
      lineHeight: normalize(72),
      letterSpacing: -2,
    },
    semi_bold: {
      fontFamily: Fonts.arm.semi_bold,
      fontWeight: '600',
      fontSize: normalize(60),
      lineHeight: normalize(72),
      letterSpacing: -2,
    },
    bold: {
      fontFamily: Fonts.arm.bold,
      fontWeight: '700',
      fontSize: normalize(60),
      lineHeight: normalize(72),
      letterSpacing: -2,
    },
  },
  display_h3: {
    regular: {
      fontFamily: Fonts.arm.regular,
      fontWeight: '400',
      fontSize: normalize(48),
      lineHeight: normalize(60),
      letterSpacing: -2,
    },
    medium: {
      fontFamily: Fonts.arm.medium,
      fontWeight: '500',
      fontSize: normalize(48),
      lineHeight: normalize(60),
      letterSpacing: -2,
    },
    semi_bold: {
      fontFamily: Fonts.arm.semi_bold,
      fontWeight: '600',
      fontSize: normalize(48),
      lineHeight: normalize(60),
      letterSpacing: -2,
    },
    bold: {
      fontFamily: Fonts.arm.bold,
      fontWeight: '700',
      fontSize: normalize(48),
      lineHeight: normalize(60),
      letterSpacing: -2,
    },
  },
  display_h4: {
    regular: {
      fontFamily: Fonts.arm.regular,
      fontWeight: '400',
      fontSize: normalize(36),
      lineHeight: normalize(44),
    },
    medium: {
      fontFamily: Fonts.arm.medium,
      fontWeight: '500',
      fontSize: normalize(36),
      lineHeight: normalize(44),
    },
    semi_bold: {
      fontFamily: Fonts.arm.semi_bold,
      fontWeight: '600',
      fontSize: normalize(36),
      lineHeight: normalize(44),
    },
    bold: {
      fontFamily: Fonts.arm.bold,
      fontWeight: '700',
      fontSize: normalize(36),
      lineHeight: normalize(44),
    },
  },
  display_h5: {
    regular: {
      fontFamily: Fonts.arm.regular,
      fontWeight: '400',
      fontSize: normalize(30),
      lineHeight: normalize(38),
    },
    medium: {
      fontFamily: Fonts.arm.medium,
      fontWeight: '500',
      fontSize: normalize(30),
      lineHeight: normalize(38),
    },
    semi_bold: {
      fontFamily: Fonts.arm.semi_bold,
      fontWeight: '600',
      fontSize: normalize(30),
      lineHeight: normalize(38),
    },
    bold: {
      fontFamily: Fonts.arm.bold,
      fontWeight: '700',
      fontSize: normalize(30),
      lineHeight: normalize(38),
    },
  },
  display_h6: {
    regular: {
      fontFamily: Fonts.arm.regular,
      fontWeight: '400',
      fontSize: normalize(24),
      lineHeight: normalize(32),
    },
    medium: {
      fontFamily: Fonts.arm.medium,
      fontWeight: '500',
      fontSize: normalize(24),
      lineHeight: normalize(32),
    },
    semi_bold: {
      fontFamily: Fonts.arm.semi_bold,
      fontWeight: '600',
      fontSize: normalize(24),
      lineHeight: normalize(32),
    },
    bold: {
      fontFamily: Fonts.arm.bold,
      fontWeight: '700',
      fontSize: normalize(24),
      lineHeight: normalize(32),
    },
  },
  text_h2: {
    regular: {
      fontFamily: Fonts.arm.regular,
      fontWeight: '400',
      fontSize: normalize(20),
      lineHeight: normalize(30),
    },
    medium: {
      fontFamily: Fonts.arm.medium,
      fontWeight: '500',
      fontSize: normalize(20),
      lineHeight: normalize(30),
    },
    semi_bold: {
      fontFamily: Fonts.arm.semi_bold,
      fontWeight: '600',
      fontSize: normalize(20),
      lineHeight: normalize(30),
    },
    bold: {
      fontFamily: Fonts.arm.bold,
      fontWeight: '700',
      fontSize: normalize(20),
      lineHeight: normalize(30),
    },
  },
  text_h3: {
    regular: {
      fontFamily: Fonts.arm.regular,
      fontWeight: '400',
      fontSize: normalize(18),
      lineHeight: normalize(28),
    },
    medium: {
      fontFamily: Fonts.arm.medium,
      fontWeight: '500',
      fontSize: normalize(18),
      lineHeight: normalize(28),
    },
    semi_bold: {
      fontFamily: Fonts.arm.semi_bold,
      fontWeight: '600',
      fontSize: normalize(18),
      lineHeight: normalize(28),
    },
    bold: {
      fontFamily: Fonts.arm.bold,
      fontWeight: '700',
      fontSize: normalize(18),
      lineHeight: normalize(28),
    },
  },
  text_h4: {
    regular: {
      fontFamily: Fonts.arm.regular,
      fontWeight: '400',
      fontSize: normalize(16),
      lineHeight: normalize(24),
    },
    medium: {
      fontFamily: Fonts.arm.medium,
      fontWeight: '500',
      fontSize: normalize(16),
      lineHeight: normalize(24),
    },
    semi_bold: {
      fontFamily: Fonts.arm.semi_bold,
      fontWeight: '600',
      fontSize: normalize(16),
      lineHeight: normalize(24),
    },
    bold: {
      fontFamily: Fonts.arm.bold,
      fontWeight: '700',
      fontSize: normalize(16),
      lineHeight: normalize(24),
    },
  },
  text_h5: {
    regular: {
      fontFamily: Fonts.arm.regular,
      fontWeight: '400',
      fontSize: normalize(14),
      lineHeight: normalize(20),
    },
    medium: {
      fontFamily: Fonts.arm.medium,
      fontWeight: '500',
      fontSize: normalize(14),
      lineHeight: normalize(20),
    },
    semi_bold: {
      fontFamily: Fonts.arm.semi_bold,
      fontWeight: '600',
      fontSize: normalize(14),
      lineHeight: normalize(20),
    },
    bold: {
      fontFamily: Fonts.arm.bold,
      fontWeight: '700',
      fontSize: normalize(14),
      lineHeight: normalize(20),
    },
  },
  text_h6: {
    regular: {
      fontFamily: Fonts.arm.regular,
      fontWeight: '400',
      fontSize: normalize(12),
      lineHeight: normalize(18),
    },
    medium: {
      fontFamily: Fonts.arm.medium,
      fontWeight: '500',
      fontSize: normalize(12),
      lineHeight: normalize(18),
    },
    semi_bold: {
      fontFamily: Fonts.arm.semi_bold,
      fontWeight: '600',
      fontSize: normalize(12),
      lineHeight: normalize(18),
    },
    bold: {
      fontFamily: Fonts.arm.bold,
      fontWeight: '700',
      fontSize: normalize(12),
      lineHeight: normalize(18),
    },
  },
};

export const IconSize = {
  small: normalize(9),
  medium: normalize(18),
};

export const Padding = {
  horizontal: normalize(20),
};

export const Shadow = {
  shadowColor: '#0A25401A',
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.09,
  shadowRadius: 16,
  elevation: 11,
};

export const BorderStyles = {
  widths: {
    normal: 1,
    border2: 2,
    border3: 3,
  },
  radius: {
    xs: 8,
    s: 10,
    ss: 12,
    sm: 16,
    md: 30,
    lg: 60,
    circle: 90,
  },
  color: {
    gray: 'rgba(11, 43, 62,.2)',
  },
};

export const fullScreen = {
  width: deviceInfo.deviceWidth,
  height: deviceInfo.deviceHeight,
};
