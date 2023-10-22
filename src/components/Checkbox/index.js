import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { styles } from 'components/Checkbox/styles';
import Svg from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';
import * as Animatable from 'react-native-animatable';

function CheckBox({ size = 20, isChecked = false, setChecked }) {
  const animation = isChecked ? 'zoomIn' : 'zoomOut';
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setChecked(!isChecked)}
      style={styles.body}>
      <View
        style={[
          {
            ...styles.checkboxBody,
            width: normalize(size),
            height: normalize(size),
          },
          {
            backgroundColor: isChecked ? Colors.oxford_blue[500] : Colors.white,
          },
        ]}>
        {isChecked ? (
          <Animatable.View
            duration={100}
            easing={'ease-in-out'}
            animation={animation}
            useNativeDriver>
            <Svg
              width={(size / 100) * 80}
              color={'white'}
              name={ICON_NAMES.ASSETS_SVG.CHECKBOX}
            />
          </Animatable.View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

export default CheckBox;
