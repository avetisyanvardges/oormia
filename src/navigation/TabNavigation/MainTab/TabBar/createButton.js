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
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { CustomText } from 'components/Text';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';

const BTN_WIDTH = normalize(200);
const BTN_HEIGHT = normalize(50);
const CREATE_BTN_WIDTH = normalize(50);
const PADDING = normalize(8);
const BTN_COUNT = 3;

function CreateButton(props) {
  const { theme, buttonColor, styles } = props;
  const [pressed, setPressed] = useState(false);
  const rotateAnim = useSharedValue(0);
  const [actionHeight, setActionHeight] = useState(0);
  useEffect(() => {
    if (pressed) {
      rotateAnim.value = withSpring(1);
    } else {
      rotateAnim.value = withSpring(0);
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
              paddingBottom: CREATE_BTN_WIDTH + normalize(16),
            }}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <View>
                <Animated.View
                  onLayout={e => setActionHeight(e.nativeEvent.layout.height)}
                  onTouchStart={() => {
                    setPressed(false);
                    if (false) {
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
                    children={'Create Event'}
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
                    children={'Send Request'}
                    globalStyle={{
                      marginLeft: normalize(8),
                      color: Colors.white,
                    }}
                  />
                </Animated.View>
                <Animated.View
                  onTouchStart={() => {
                    setPressed(false);
                    navigate(routNames.CREATE_GROUP);
                  }}
                  style={[styles.buttons, buttonStyle, groupStyle]}>
                  <Icon name={ICON_NAMES.PROFILE.GROUPS} color={Colors.white} />
                  <CustomText
                    children={'Create Group'}
                    globalStyle={{
                      marginLeft: normalize(8),
                      color: Colors.white,
                    }}
                  />
                </Animated.View>
                {/*<Animated.View style={[styles.buttons, buttonStyle, tripStyle]}>*/}
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
