import React, { useState } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';
import { CustomText } from 'components/Text';

const loader = {
  profile: require('../../assets/lottie/profile.json'),
  image: require('../../assets/lottie/image.json'),
};

const MImage = ({
  source,
  style,
  loaderStyle,
  type = 'image',
  resizeMode,
  onError,
  firstChar,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <FastImage
      source={source}
      onLoad={() => {
        setLoading(false);
      }}
      resizeMode={resizeMode}
      style={style}
      onError={() => {
        setLoading(false);
        setError(true);
        onError && onError();
      }}>
      {loading ? (
        <SkeletonPlaceholder borderRadius={style.borderRadius}>
          <SkeletonPlaceholder.Item width={style.width} height={style.height} />
        </SkeletonPlaceholder>
      ) : null}
      {error ? (
        <View
          style={{
            width: style.width,
            height: style.height,
            borderRadius: normalize(25),
            backgroundColor: Colors.purple['600'],
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CustomText
            children={firstChar}
            globalStyle={{
              ...FontStyle.text_h2.semi_bold,
              color: Colors.white,
            }}
          />
        </View>
      ) : null}
    </FastImage>
  );
};

export default MImage;
