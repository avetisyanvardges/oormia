import React from 'react';
import { ICON_NAMES } from './icon_names';
import {
  CreateIcon,
  HomeIcon,
  MapIcon,
  ProfileIcon,
  TicketIcon,
} from './TabBar';
import { Clear, EyeClose, EyeOpen } from './InputBtn';
import {
  AppleIcon,
  FbIcon,
  GoogleIcon,
  InstIcon,
  Linkedin,
  VkIcon,
} from './ButtonIcon';
import { ArrowLeft, Checkbox, CropPhoto, Search } from './Assets';
import { MessageIcon } from 'components/Svgs/MessageIcon';
import { NotificationIcon } from 'components/Svgs/NotificationIcon';
import { FriendsIcon } from 'components/Svgs/Profile/Friends';
import { EventsIcon } from 'components/Svgs/Profile/Events';
import { TripsIcon } from 'components/Svgs/Profile/Trips';
import { PreferencesIcon } from 'components/Svgs/Profile/Preferences';
import { LanguageIcon } from 'components/Svgs/Profile/Language';
import { PrivacyPolicyIcon } from 'components/Svgs/Profile/PrivacyPolicy';
import { TermsAndConditionIcon } from 'components/Svgs/Profile/TermsAndCondition';
import { LogoutIcon } from 'components/Svgs/Profile/Logout';
import { ArrowLeftIcon } from 'components/Svgs/Arrows/Left';
import { ArrowRightIcon } from 'components/Svgs/Arrows/Right';
import { NotificationAndSoundIcon } from 'components/Svgs/Profile/NotificationsAndSound';
import { LocationIcon } from 'components/Svgs/Location';
import { CalendarIcon } from 'components/Svgs/Calendar';
import { TimeIcon } from 'components/Svgs/Time';
import { GalleryAddIcon } from 'components/Svgs/GalleryAdd';
import { PinLocationIcon } from 'components/Svgs/PinLocation';
import { SearchIcon } from 'components/Svgs/Search';
import { CurrentLocationIcon } from 'components/Svgs/CurrentLocation';
import { ListIcon } from 'components/Svgs/List';
import { LockIcon } from 'components/Svgs/LockIcon';
import { UnLockIcon } from 'components/Svgs/UnLockIcon';
import { DurationIcon } from 'components/Svgs/DurationIcon';
import { MyLocationIcon } from 'components/Svgs/MyLocation';
import { TopicIcon } from 'components/Svgs/Topic';
import { SaveLinearIcon } from 'components/Svgs/SaveIcon/Linear';
import { MoreIcon } from 'components/Svgs/More';
import { CompassIcon } from 'components/Svgs/Compass';
import { TicketBoldIcon } from 'components/Svgs/TicketBold';
import { EditIcon } from 'components/Svgs/EditIcon';
import { RemoveIcon } from 'components/Svgs/RemoveIcon';
import { PlusIcon } from 'components/Svgs/Plus';
import { MinusIcon } from 'components/Svgs/Minus';
import { FilterIcon } from 'components/Svgs/FilterIcon';
import { ShareIcon } from 'components/Svgs/ShareIcon';
import { WarningIcon } from 'components/Svgs/WarningIcon';
import { EmptyChooseSpeakerIcon } from 'components/Svgs/EmptyStates/EmptyChooseSpeakerIcon';
import { SettingsIcon } from 'components/Svgs/SettingsIcon';
import { UserIcon } from 'components/Svgs/UserIcon';
import { PremiumIcon } from 'components/Svgs/PremiumIcon';
import { EditProfileIcon } from 'components/Svgs/EditProfileIcon';
import { toastMessageTypes } from 'state/snackbars/types';
import { ToastInfoIcon } from 'components/Svgs/Toast/InfoIcon';
import { ToastErrorIcon } from 'components/Svgs/Toast/ErrorIcon';
import { ToastWarningIcon } from 'components/Svgs/Toast/WarningIcon';
import { ToastSuccessIcon } from 'components/Svgs/Toast/SuccessIcon';
import { TicketEmptyIcon } from 'components/Svgs/TicketEmpty';
import { EventWarning } from 'components/Svgs/EventWarning';
import { EmptyNotificationsIcon } from 'components/Svgs/EmptyStates/EmptyNotifications';
import { EmptyGroupsIcon } from 'components/Svgs/EmptyStates/EmptyGroups';
import { NotModeratedEventIcon } from 'components/Svgs/Admin/NotModeratedEvent';
import { CategoriesIcon } from 'components/Svgs/Admin/Categories';
import { EmptyEventIcon } from 'components/Svgs/EmptyStates/EmptyEvent';
import { AmFlagIcon } from 'components/Svgs/Flag/Am';
import { RuFlagIcon } from 'components/Svgs/Flag/Ru';
import { EnFlagIcon } from 'components/Svgs/Flag/En';
import { CheckboxOnIcon } from 'components/Svgs/CheckboxOn';

export const ICONS = {
  [ICON_NAMES.ADMIN.NOT_MODERATED_EVENT]: ({ width, height, size, color }) => (
    <NotModeratedEventIcon
      width={width}
      height={height}
      size={size}
      color={color}
    />
  ),
  [ICON_NAMES.ADMIN.CATEGORIES]: ({ width, height, size, color }) => (
    <CategoriesIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.ASSETS_SVG.SEARCH]: ({ width, height, size, color }) => (
    <Search width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.ARROW.LEFT]: ({ width, height, size, color }) => (
    <ArrowLeftIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.ARROW.RIGHT]: ({ width, height, size, color }) => (
    <ArrowRightIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.ASSETS_SVG.CROP_PHOTO]: ({ width, height, size, color }) => (
    <CropPhoto width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.BUTTON_ICON.LINKEDIN]: ({ width, height, size, color }) => (
    <Linkedin width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.CHECKBOX.ON]: (size, width, height, color) => (
    <CheckboxOnIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.FLAGS.AM]: ({ width, height, size, color }) => (
    <AmFlagIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.FLAGS.RU]: ({ width, height, size, color }) => (
    <RuFlagIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.FLAGS.EN]: ({ width, height, size, color }) => (
    <EnFlagIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.ASSETS_SVG.CHECKBOX]: ({ width, height, size, color }) => (
    <Checkbox width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.ASSETS_SVG.ARROW_LEFT]: ({ width, height, size, color }) => (
    <ArrowLeft width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.CURRENT_LOCATION]: ({ width, height, size, color }) => (
    <CurrentLocationIcon
      width={width}
      height={height}
      size={size}
      color={color}
    />
  ),
  [ICON_NAMES.SEARCH]: ({ width, height, size, color }) => (
    <SearchIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.SAVE]: ({ width, height, size, color, backgroundColor }) => (
    <SaveLinearIcon
      width={width}
      height={height}
      size={size}
      color={color}
      backgroundColor={backgroundColor}
    />
  ),
  [ICON_NAMES.MORE_ICON]: ({ width, height, size, color, backgroundColor }) => (
    <MoreIcon
      width={width}
      height={height}
      size={size}
      color={color}
      backgroundColor={backgroundColor}
    />
  ),
  [ICON_NAMES.LIST]: ({ width, height, size, color }) => (
    <ListIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.LOCK]: ({ width, height, size, color }) => (
    <LockIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.COMPASS]: ({ width, height, size, color }) => (
    <CompassIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.EVENT_WARNING]: ({ width, height, size, color }) => (
    <EventWarning width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TICKET_EMPTY]: ({ width, height, size, color }) => (
    <TicketEmptyIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.EDIT]: ({ width, height, size, color }) => (
    <EditIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.EDIT_PROFILE]: ({ width, height, size, color }) => (
    <EditProfileIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.WARNING]: ({ width, height, size, color }) => (
    <WarningIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.SETTINGS]: ({ width, height, size, color }) => (
    <SettingsIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.USER]: ({ width, height, size, color }) => (
    <UserIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TOAST[toastMessageTypes.INFO]]: ({
    width,
    height,
    size,
    color,
  }) => (
    <ToastInfoIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TOAST[toastMessageTypes.WARNING]]: ({
    width,
    height,
    size,
    color,
  }) => (
    <ToastWarningIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TOAST[toastMessageTypes.ERROR]]: ({
    width,
    height,
    size,
    color,
  }) => (
    <ToastErrorIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TOAST[toastMessageTypes.SUCCESS]]: ({
    width,
    height,
    size,
    color,
  }) => (
    <ToastSuccessIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.PREMIUM]: ({ width, height, size, color }) => (
    <PremiumIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.EMPTY_STATES.CHOOSE_SPEAKER]: ({
    width,
    height,
    size,
    color,
  }) => (
    <EmptyChooseSpeakerIcon
      width={width}
      height={height}
      size={size}
      color={color}
    />
  ),
  [ICON_NAMES.EMPTY_STATES.NOTIFICATION]: ({ width, height, size, color }) => (
    <EmptyNotificationsIcon
      width={width}
      height={height}
      size={size}
      color={color}
    />
  ),
  [ICON_NAMES.EMPTY_STATES.GROUPS]: ({ width, height, size, color }) => (
    <EmptyGroupsIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.EMPTY_STATES.EVENTS]: ({ width, height, size, color }) => (
    <EmptyEventIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.REMOVE]: ({ width, height, size, color }) => (
    <RemoveIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.MINUS]: ({ width, height, size, color }) => (
    <MinusIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.PLUS]: ({ width, height, size, color }) => (
    <PlusIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.FILTER]: ({ width, height, size, color }) => (
    <FilterIcon width={width} height={height} size={size} color={color} />
  ),

  [ICON_NAMES.TICKET]: ({ width, height, size, color }) => (
    <TicketBoldIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.UNLOCK]: ({ width, height, size, color }) => (
    <UnLockIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.SHARE]: ({ width, height, size, color }) => (
    <ShareIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.DURATION]: ({ width, height, size, color }) => (
    <DurationIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.LOCATION]: ({ width, height, size, color }) => (
    <LocationIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.MY_LOCATION]: ({ width, height, size, color }) => (
    <MyLocationIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.PIN_LOCATION]: ({ width, height, size, color }) => (
    <PinLocationIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.CALENDAR]: ({ width, height, size, color }) => (
    <CalendarIcon
      width={size || width}
      height={size || height}
      size={size}
      color={color}
    />
  ),
  [ICON_NAMES.TOPIC]: ({ width, height, size, color }) => (
    <TopicIcon
      width={size || width}
      height={size || height}
      size={size}
      color={color}
    />
  ),
  [ICON_NAMES.LANGUAGE]: ({ width, height, size, color }) => (
    <LanguageIcon
      width={size || width}
      height={size || height}
      size={size}
      color={color}
    />
  ),
  [ICON_NAMES.TIME]: ({ width, height, size, color }) => (
    <TimeIcon width={size || width} height={size || height} color={color} />
  ),
  [ICON_NAMES.GALLERY_ADD]: ({ width, height, size, color }) => (
    <GalleryAddIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.BUTTON_ICON.GOOGLE]: ({ width, height, size, color }) => (
    <GoogleIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.BUTTON_ICON.APPLE]: ({ width, height, size, color }) => (
    <AppleIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.BUTTON_ICON.INST]: ({ width, height, size, color }) => (
    <InstIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.BUTTON_ICON.VK]: ({ width, height, size, color }) => (
    <VkIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.BUTTON_ICON.FB]: ({ width, height, size, color }) => (
    <FbIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.INPUT_BTN.CLEAR]: ({ width, height, size, color }) => (
    <Clear width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.INPUT_BTN.EYE_OPEN]: ({ width, height, size, color }) => (
    <EyeClose width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.INPUT_BTN.EYE_CLOSE]: ({ width, height, size, color }) => (
    <EyeOpen width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.MESSAGE]: ({ width, height, size, color }) => (
    <MessageIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.NOTIFICATION]: ({ width, height, size, color }) => (
    <NotificationIcon width={width} height={height} size={size} color={color} />
  ),

  [ICON_NAMES.TAB_BAR.HOME]: ({ width, height, size, color }) => (
    <HomeIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TAB_BAR.MAP]: ({ width, height, size, color }) => (
    <MapIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TAB_BAR.CREATE]: ({ width, height, size, color }) => (
    <CreateIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TAB_BAR.TICKET]: ({ width, height, size, color }) => (
    <TicketIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.TAB_BAR.PROFILE]: ({ width, height, size, color }) => (
    <ProfileIcon width={width} height={height} size={size} color={color} />
  ),
  [ICON_NAMES.PROFILE.FRIENDS]: ({ width, height, size, color }) => (
    <FriendsIcon
      width={width || size}
      height={height || size}
      size={size}
      color={color}
    />
  ),
  [ICON_NAMES.PROFILE.EVENTS]: ({ width, height, size, color }) => (
    <EventsIcon
      width={width || size}
      height={height || size}
      size={size}
      color={color}
    />
  ),
  [ICON_NAMES.PROFILE.TRIPS]: ({ width, height, size, color }) => (
    <TripsIcon
      width={width || size}
      height={height || size}
      size={size}
      color={color}
    />
  ),
  [ICON_NAMES.PROFILE.PREFERENCES]: ({ width, height, size, color }) => (
    <PreferencesIcon
      width={width || size}
      height={height || size}
      size={size}
      color={color}
    />
  ),
  [ICON_NAMES.PROFILE.LANGUAGE]: ({ width, height, size, color }) => (
    <LanguageIcon
      width={width || size}
      height={height || size}
      size={size}
      color={color}
    />
  ),
  [ICON_NAMES.PROFILE.PRIVACY_POLICY]: ({ width, height, size, color }) => (
    <PrivacyPolicyIcon
      width={width || size}
      height={height || size}
      size={size}
      color={color}
    />
  ),
  [ICON_NAMES.PROFILE.TERMS_AND_CONDITION]: ({
    width,
    height,
    size,
    color,
  }) => (
    <TermsAndConditionIcon
      width={width || size}
      height={height || size}
      size={size}
      color={color}
    />
  ),
  [ICON_NAMES.PROFILE.LOGOUT]: ({ width, height, size, color }) => (
    <LogoutIcon
      width={width || size}
      height={height || size}
      size={size}
      color={color}
    />
  ),
  [ICON_NAMES.PROFILE.NOTIFICATION_AND_SOUND]: ({
    width,
    height,
    size,
    color,
  }) => (
    <NotificationAndSoundIcon
      width={width || size}
      height={height || size}
      size={size}
      color={color}
    />
  ),
};
