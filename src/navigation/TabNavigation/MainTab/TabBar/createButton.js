import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

function CreateButton(props) {
  const { theme, buttonColor, styles } = props;
  const [pressed, setPressed] = useState(false);
  const top1 = useSharedValue(-33);
  const top2 = useSharedValue(-33);
  const left1 = useSharedValue(0);
  const left2 = useSharedValue(0);

  const animatedStylesSend = useAnimatedStyle(() => {
    return {
      top: top1.value,
      left: left1.value,
    };
  });
  const animatedStylesCreate = useAnimatedStyle(() => {
    return {
      top: top2.value,
      left: left2.value,
    };
  });

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          // setPressed(true);
          navigate(routNames.CREATE_EVENT);
        }}>
        {/*<Animated.View*/}
        {/*  style={[*/}
        {/*    {*/}
        {/*      width: normalize(50),*/}
        {/*      height: normalize(50),*/}
        {/*      borderRadius: normalize(25),*/}
        {/*      backgroundColor: Colors.purple['500'],*/}
        {/*      position: 'absolute',*/}
        {/*    },*/}
        {/*    animatedStylesSend,*/}
        {/*  ]}*/}
        {/*/>*/}
        {/*<Animated.View*/}
        {/*  style={[*/}
        {/*    {*/}
        {/*      width: normalize(50),*/}
        {/*      height: normalize(50),*/}
        {/*      borderRadius: normalize(25),*/}
        {/*      backgroundColor: Colors.purple['500'],*/}
        {/*      position: 'absolute',*/}
        {/*    },*/}
        {/*    animatedStylesCreate,*/}
        {/*  ]}*/}
        {/*/>*/}

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
          <View style={{ transform: [{ rotate: '315deg' }] }}>
            <Icon
              name={ICON_NAMES.TAB_BAR.CREATE}
              width={normalize(25)}
              height={normalize(25)}
              color={theme?.PRIMARY_BACKGROUND_COLOR}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CreateButton;
