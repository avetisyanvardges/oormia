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
  FbIcon,
  VkIcon,
  InstIcon,
  AppleIcon,
  GoogleIcon,
  Linkedin,
} from "./ButtonIcon";
import {
  ArrowLeft,
  Checkbox,
  CropPhoto,
  Search,
} from "./Assets"

export const ICONS = {
  [ICON_NAMES.ASSETS_SVG.SEARCH]: ({width, height, size, color}) => (
      <Search width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.ASSETS_SVG.CROP_PHOTO]: ({width, height, size, color}) => (
      <CropPhoto width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.BUTTON_ICON.LINKEDIN]: ({width, height, size, color}) => (
      <Linkedin width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.ASSETS_SVG.CHECKBOX]: ({width, height, size, color}) => (
      <Checkbox width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.ASSETS_SVG.ARROW_LEFT]: ({width, height, size, color}) => (
    <ArrowLeft width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.BUTTON_ICON.GOOGLE]: ({width, height, size, color}) => (
    <GoogleIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.BUTTON_ICON.APPLE]: ({width, height, size, color}) => (
    <AppleIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.BUTTON_ICON.INST]: ({width, height, size, color}) => (
    <InstIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.BUTTON_ICON.VK]: ({width, height, size, color}) => (
    <VkIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.BUTTON_ICON.FB]: ({width, height, size, color}) => (
    <FbIcon width={width} height={height} size={size} color={color} />
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
