import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { useNavigation } from '@react-navigation/native';
import { normalize } from 'assets/RootStyles/normalize';

function Index({ onPress, color }) {
  const navigation = useNavigation();
  console.log('COLORSS', color);
  return (
    <TouchableOpacity
      style={{ padding: normalize(5) }}
      onPress={() => (onPress ? onPress() : navigation.goBack())}>
      <Icon name={ICON_NAMES.ASSETS_SVG.ARROW_LEFT} color={color} />
    </TouchableOpacity>
  );
}

export default Index;
