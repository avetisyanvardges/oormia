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

export const ICONS = {
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
