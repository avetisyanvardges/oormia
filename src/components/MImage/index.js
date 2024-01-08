import React, { useState } from 'react';
import { View } from 'react-native';
import FastImage from 'react-native-fast-image';
import LottieView from 'lottie-react-native';

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
}) => {
  const [loading, setLoading] = useState(true);

  return (
    <FastImage
      source={source}
      onLoad={() => {
        setLoading(false);
      }}
      resizeMode={resizeMode}
      style={style}
      onError={() => {
        if (type === 'profile') {
          setLoading(true);
          return;
        }

        onError && onError();
      }}>
      {loading ? (
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgb(215,215,215)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <LottieView
            style={[style, loaderStyle]}
            source={loader[type]}
            autoPlay
            loop
          />
        </View>
      ) : null}
    </FastImage>
  );
};

export default MImage;
