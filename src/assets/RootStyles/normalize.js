import { Dimensions, PixelRatio } from "react-native";

export const SCREEN_WIDTH: number = Dimensions.get('window').width;
export const SCREEN_HEIGHT: number = Dimensions.get('window').height;

const scale: number = SCREEN_WIDTH / 360;
const scaleHeight: number = SCREEN_HEIGHT / 800;

export const normalize = (size: number, forHeight?: boolean) => {
  const newSize = size * (forHeight ? scaleHeight : scale);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
