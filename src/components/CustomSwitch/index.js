import { TouchableWithoutFeedback } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Styles } from './style';
import { normalize } from 'assets/RootStyles/normalize';

const Switch = ({
  trackWidth,
  trackHeight,
  thumbWidth,
  thumbHeight,
  activeColor,
  inActiveColor,
  active = false,
  setActive,
}) => {
  const styles = Styles();
  const switchTranslate = useSharedValue(0);
  const switcherWidth = useSharedValue(24);
  const progress = useDerivedValue(() => {
    return withTiming(active ? 24 : 0);
  });

  useEffect(() => {
    if (active) {
      switchTranslate.value = 24;
    } else {
      switchTranslate.value = 4;
    }
  }, [active, switchTranslate]);

  const customSpringStyles = useAnimatedStyle(() => {
    return {
      width: switcherWidth.value,
      transform: [
        {
          translateX: withSpring(switchTranslate.value, {
            mass: 1,
            damping: 15,
            stiffness: 120,
            overshootClamping: false,
            restSpeedThreshold: 0.001,
            restDisplacementThreshold: 0.001,
          }),
        },
      ],
    };
  });

  const backgroundColorStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 22],
      [inActiveColor, activeColor],
    );
    return {
      backgroundColor,
    };
  });

  const handleOnPress = () => {
    setActive(!active);
  };

  const handleOnPressIn = () => {
    if (active) {
      switchTranslate.value = 20;
    }

    switcherWidth.value = withSpring(normalize(28));
  };

  const handleOnPressOut = () => {
    switcherWidth.value = withSpring(normalize(24));
  };

  return (
    <TouchableWithoutFeedback
      onPress={handleOnPress}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}>
      <Animated.View
        style={[
          styles.container,
          backgroundColorStyle,
          {
            width: trackWidth || normalize(50),
            height: trackHeight || normalize(28),
          },
        ]}>
        <Animated.View
          style={[
            styles.circle,
            customSpringStyles,
            {
              width: thumbWidth || normalize(24),
              height: thumbHeight || normalize(24),
            },
          ]}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Switch;
