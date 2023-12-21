import React, { useEffect, useImperativeHandle, useRef, useState } from 'react';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import { Styles } from './styles';
import { Colors, fullScreen } from 'assets/RootStyles';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';

const Toast = React.forwardRef(({ duration = 400, onHide }, ref) => {
  const styles = Styles();
  const [textLength, setTextLength] = useState(0);
  const [toastHeight, setToastHeight] = useState(0);

  const [config, setConfig] = useState({
    text: undefined,
    type: undefined,
    duration: 0,
  });
  const visibleState = useRef(false);
  const timer = useRef(null);

  const transY = useSharedValue(0);
  const transX = useSharedValue(0);

  useImperativeHandle(ref, () => ({
    show,
    hide,
  }));

  useEffect(() => {
    if (textLength && toastHeight && config.text) {
      transX.value = textLength + 12;
      showToast();
      timer.current = setTimeout(() => {
        hideToast();
      }, 4000);
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [config, toastHeight, textLength]);

  useEffect(() => {
    if (toastHeight) {
      transY.value = -toastHeight;
    }
  }, [toastHeight]);

  const rView = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: transY.value }],
      opacity: interpolate(
        transY.value,
        [-toastHeight, 80],
        [0, 1],
        Extrapolation.CLAMP,
      ),
    };
  }, [toastHeight]);

  const rOuterView = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: -Math.max(transX.value, 1) / 2 }],
    };
  }, []);

  const rInnerView = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: transX.value }],
    };
  }, []);

  const rText = useAnimatedStyle(() => {
    return {
      opacity: interpolate(transX.value, [0, textLength], [1, 0]),
    };
  }, [textLength]);

  function show(text, type, duration) {
    setConfig({ text, type, duration });
  }

  function hide(callback) {
    hideToast(callback);
  }

  function generateBackgroundColor() {
    if (config?.type === 'success') {
      return '#1f8503';
    } else if (config?.type === 'error') {
      return Colors.red['500'];
    } else {
      return Colors.blue['500'];
    }
  }

  function showToast() {
    if (!visibleState.current) {
      visibleState.current = true;
      transY.value = withTiming(80, { duration: config.duration });
      transX.value = withDelay(
        config.duration,
        withTiming(0, { duration: config.duration }),
      );
    }
  }

  function hideToast(callback) {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    transX.value = withTiming(textLength + 12, { duration });
    transY.value = withDelay(
      config.duration,
      withTiming(
        -toastHeight,
        {
          duration: config.duration,
          easing: Easing.bezierFn(0.36, 0, 0.66, -0.56),
        },
        () => {
          runOnJS(handleOnFinish)(callback);
        },
      ),
    );
  }

  function handleOnFinish(callback) {
    setConfig({
      text: undefined,
      type: undefined,
      duration: 0,
    });
    if (onHide) {
      onHide();
    }

    if (callback) {
      setTimeout(() => {
        callback();
      }, 100);
    }

    visibleState.current = false;
  }

  function handleTextLayout(event) {
    if (textLength !== event.nativeEvent.layout.width) {
      setTextLength(Math.floor(event.nativeEvent.layout.width));
    }
  }

  function handleViewLayout(event) {
    if (toastHeight !== event.nativeEvent.layout.height) {
      setToastHeight(event.nativeEvent.layout.height);
    }
  }

  return (
    <Animated.View
      onLayout={handleViewLayout}
      style={[
        styles.container,
        rView,
        {
          marginLeft: `${(100 - (textLength * 100) / fullScreen.width) / 3}%`,
        },
      ]}>
      <Animated.View style={[styles.outerContainer, rOuterView]}>
        <Animated.View
          style={[
            styles.innerContainer,
            rInnerView,
            { backgroundColor: generateBackgroundColor() },
          ]}>
          <Icon name={ICON_NAMES.TOAST[config.type]} color={Colors.white} />
          <Animated.Text
            onLayout={handleTextLayout}
            style={[styles.text, rText]}>
            {config?.text}
          </Animated.Text>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
});

export default Toast;
