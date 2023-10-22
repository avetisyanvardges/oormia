import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import React, { useState, useEffect } from 'react';
import Animated, {
  interpolateColor,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useDerivedValue,
} from 'react-native-reanimated';
import { Styles } from './style';

const Switch = ({ activeColor, inActiveColor, active = false, setActive }) => {
  const styles = Styles();
  // value for Switch Animation
  const switchTranslate = useSharedValue(0);
  // state for activate Switch
  // Progress Value
  const progress = useDerivedValue(() => {
    return withTiming(active ? 24 : 0);
  });

  // useEffect for change the switchTranslate Value
  useEffect(() => {
    if (active) {
      switchTranslate.value = 26;
    } else {
      switchTranslate.value = 4;
    }
  }, [active, switchTranslate]);

  // Circle Animation
  const customSpringStyles = useAnimatedStyle(() => {
    return {
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

  // Background Color Animation
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

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setActive(!active);
      }}>
      <Animated.View style={[styles.container, backgroundColorStyle]}>
        <Animated.View style={[styles.circle, customSpringStyles]} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Switch;
