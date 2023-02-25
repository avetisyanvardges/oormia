import React from 'react';
import {ICON_NAMES} from './icon_names';
import {
  ChatIcon,
  CreateIcon,
  EventsIcon,
  GroupIcon,
  MapIcon,
  Mentor,
  RequestIcon,
  Routing,
  UserIcon,
  WorldIcon,
} from './TabBar';
import {
  Clear,
  EyeClose,
  EyeOpen,
} from './InputBtn';
import {
  Checkbox
} from "./Assets";

export const ICONS = {
  [ICON_NAMES.ASSETS_SVG.CHECKBOX]:({width, height, size, color})=>(
    <Checkbox width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.INPUT_BTN.CLEAR]: ({width, height, size, color}) => (
      <Clear width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.INPUT_BTN.EYE_OPEN]: ({width, height, size, color}) => (
      <EyeClose width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.INPUT_BTN.EYE_CLOSE]: ({width, height, size, color}) => (
      <EyeOpen width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TAB_BAR.CHAT]: ({width, height, size, color}) => (
    <ChatIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TAB_BAR.CREATE_ICON]: ({width, height, size, color}) => (
    <CreateIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TAB_BAR.EVENTS]: ({width, height, size, color}) => (
    <EventsIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TAB_BAR.GROUP]: ({width, height, size, color}) => (
    <GroupIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TAB_BAR.MAP]: ({width, height, size, color}) => (
    <MapIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TAB_BAR.MENTOR]: ({width, height, size, color}) => (
    <Mentor width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TAB_BAR.REQUEST]: ({width, height, size, color}) => (
    <RequestIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TAB_BAR.ROUTING]: ({width, height, size, color}) => (
    <Routing width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TAB_BAR.USER]: ({width, height, size, color}) => (
    <UserIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TAB_BAR.WORLD]: ({width, height, size, color}) => (
    <WorldIcon width={width} height={height} size={size} color={color} />
  ),
};
