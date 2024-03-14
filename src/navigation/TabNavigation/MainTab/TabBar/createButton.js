import React, { useEffect, useState } from 'react';
import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import Animated, {
  Easing,
  interpolate,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { CustomText } from 'components/Text';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import { deviceInfo } from 'assets/deviceInfo';
import { useSelector } from 'react-redux';
import bank from 'state/bank';
import { isEmpty } from 'lodash';

const BTN_WIDTH = normalize(200);
const BTN_HEIGHT = normalize(50);
const CREATE_BTN_WIDTH = normalize(50);
const PADDING = normalize(4);
const BTN_COUNT = 3;

function CreateButton(props) {
  const { theme, buttonColor, styles } = props;
  const { bank_accounts } = useSelector(({ bank }) => bank);
  const [pressed, setPressed] = useState(false);
  const rotateAnim = useSharedValue(0);
  const [actionHeight] = useState(normalize(60));
  useEffect(() => {
    if (pressed) {
      rotateAnim.value = withSpring(1, {
        mass: 1,
        damping: 10,
        stiffness: 100,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
        reduceMotion: ReduceMotion.System,
      });
    } else {
      rotateAnim.value = withSpring(0, {
        mass: 1,
        damping: 10,
        stiffness: 100,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
        reduceMotion: ReduceMotion.System,
      });
    }
  }, [pressed]);

  const rotation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(rotateAnim.value, [0, 1], [45, 90])}deg`,
        },
      ],
    };
  });

  const buttonStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(rotateAnim.value, [0, 1], [0, BTN_WIDTH]),
      height: interpolate(rotateAnim.value, [0, 1], [1, BTN_HEIGHT]),
      left: interpolate(
        rotateAnim.value,
        [0, 1],
        [0, -((BTN_WIDTH - CREATE_BTN_WIDTH) / 2)],
      ),
      opacity: interpolate(rotateAnim.value, [0, 1], [0, 1]),
    };
  });

  const eventStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            rotateAnim.value,
            [0, 1],
            [
              0,
              -(actionHeight * BTN_COUNT + PADDING * 3 + CREATE_BTN_WIDTH / 2),
            ],
          ),
        },
      ],
    };
  }, [actionHeight]);

  const requestStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            rotateAnim.value,
            [0, 1],
            [
              0,
              -(
                actionHeight * (BTN_COUNT - 1) +
                PADDING * 2 +
                CREATE_BTN_WIDTH / 2
              ),
            ],
          ),
        },
      ],
    };
  }, [actionHeight]);

  const groupStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            rotateAnim.value,
            [0, 1],
            [0, -(actionHeight + PADDING + CREATE_BTN_WIDTH / 2)],
          ),
        },
      ],
    };
  }, [actionHeight]);

  const tripStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            rotateAnim.value,
            [0, 1],
            [0, -(actionHeight + CREATE_BTN_WIDTH / 2)],
          ),
        },
      ],
    };
  }, [actionHeight]);

  console.log(bank_accounts, 'BANK ACCOUNTS');
  return (
    <View>
      <Modal
        animationType="fade"
        transparent
        visible={pressed}
        onRequestClose={() => {
          setPressed(false);
        }}>
        <TouchableWithoutFeedback onPress={() => setPressed(false)}>
          <View
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              justifyContent: 'flex-end',
              alignItems: 'center',
              left: -(CREATE_BTN_WIDTH / 2),
              paddingBottom: deviceInfo?.android
                ? CREATE_BTN_WIDTH + normalize(10)
                : actionHeight + normalize(16),
            }}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View>
                <Animated.View
                  onTouchStart={() => {
                    setPressed(false);
                    if (!isEmpty(bank_accounts)) {
                      navigate(routNames.CREATE_EVENT, {
                        screen: 'choose_category',
                      });
                    } else {
                      navigate(routNames.ADD_BANK_ACCOUNT);
                    }
                  }}
                  style={[styles.buttons, buttonStyle, eventStyle]}>
                  <Icon name={ICON_NAMES.PROFILE.EVENTS} color={Colors.white} />
                  <CustomText
                    children={'create_event'}
                    globalStyle={{
                      marginLeft: normalize(8),
                      color: Colors.white,
                    }}
                  />
                </Animated.View>
                <Animated.View
                  onTouchStart={() => {
                    setPressed(false);
                    navigate(routNames.CREATE_EVENT, {
                      screen: 'choose_a_speaker',
                    });
                  }}
                  style={[styles.buttons, buttonStyle, requestStyle]}>
                  <Icon
                    name={ICON_NAMES.TAB_BAR.REQUEST}
                    color={Colors.white}
                  />
                  <CustomText
                    children={'send_request'}
                    globalStyle={{
                      marginLeft: normalize(8),
                      color: Colors.white,
                    }}
                  />
                </Animated.View>
                <Animated.View
                  // onLayout={e => {
                  //   setActionHeight(e.nativeEvent.layout.height);
                  // }}
                  onTouchStart={() => {
                    setPressed(false);
                    navigate(routNames.CREATE_GROUP);
                  }}
                  style={[styles.buttons, buttonStyle, groupStyle]}>
                  <Icon name={ICON_NAMES.PROFILE.GROUPS} color={Colors.white} />
                  <CustomText
                    children={'create_group'}
                    globalStyle={{
                      marginLeft: normalize(8),
                      color: Colors.white,
                    }}
                  />
                </Animated.View>
                {/*<Animated.View style={[styles.buttons, buttonStyle,  tripStyle]}>*/}
                {/*  <Icon name={ICON_NAMES.PROFILE.GROUPS} color={Colors.white} />*/}
                {/*  <CustomText*/}
                {/*    children={'Plan your trip'}*/}
                {/*    globalStyle={{ marginLeft: normalize(8), color: Colors.white }}*/}
                {/*  />*/}
                {/*</Animated.View>*/}
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          setPressed(!pressed);
        }}>
        <View
          style={[
            styles.middleIcon,
            {
              backgroundColor: Colors.purple['500'],
              shadowColor: Colors.black,
              shadowOffset: { width: 2, height: 2 },
              elevation: 8,
            },
          ]}>
          <Animated.View style={rotation}>
            <Icon
              name={ICON_NAMES.PLUS}
              width={normalize(25)}
              height={normalize(25)}
              color={theme?.PRIMARY_BACKGROUND_COLOR}
            />
          </Animated.View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CreateButton;
