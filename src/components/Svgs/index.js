import React from 'react';
import {ICONS} from './hook';
import {TouchableOpacity} from 'react-native';

const Icon = ({
  name,
  size,
  width,
  height,
  color,
  onPress,
  disabled,
  activeOpacity,
  style,
}) => {
  return (
    <TouchableOpacity
      disabled={!onPress}
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={style}
    >
      {ICONS[name] && ICONS[name]({size, width, height, color})}
    </TouchableOpacity>
  );
};

export default Icon;
