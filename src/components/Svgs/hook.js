import React from 'react';
import {ICON_NAMES} from 'components/Svgs/icon_names';
import {Compass} from 'components/Svgs/TabBar/Compass';
import {ActiveCompass} from 'components/Svgs/TabBar/ActiveCompass';

export const ICONS = {
  [ICON_NAMES.TAB_BAR.COMPASS]: ({width, height, size, color}) => (
    <Compass width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TAB_BAR.ACTIVE_COMPASS]: ({width, height, size, color}) => (
    <ActiveCompass width={width} height={height} size={size} color={color} />
  ),
};
