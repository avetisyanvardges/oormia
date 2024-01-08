import React from 'react';
import { navigate } from 'services/NavigationService';
import useContainer from './hook';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'components/Svgs';
import { Colors, FontStyle } from 'assets/RootStyles';
import { normalize } from 'assets/RootStyles/normalize';
import { CustomText } from 'components/Text';
import { ICON_NAMES } from 'components/Svgs/icon_names';

const MenuLink = ({
  onPress,
  routeName,
  query,
  title,
  iconName,
  backgroundColor = Colors.purple['200'],
  color = Colors.purple['500'],
  textColor = Colors.grey['500'],
  arrowRight = true,
  disabled,
}) => {
  const { styles } = useContainer();
  return (
    <TouchableOpacity
      onPress={() => {
        if (onPress) {
          onPress();
        }

        if (routeName) {
          navigate(routeName, { query });
        }
      }}
      disabled={!onPress && !routeName}
      style={{
        opacity: disabled ? 0.4 : 1,
      }}
      activeOpacity={0.7}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          {iconName && (
            <View
              style={{
                width: normalize(36),
                height: normalize(36),
                borderRadius: normalize(18),
                backgroundColor: backgroundColor,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icon name={iconName} size={normalize(24)} color={color} />
            </View>
          )}
          <CustomText
            children={title}
            ellipsizeMode={'tail'}
            numberOfLines={1}
            globalStyle={[
              { ...FontStyle.text_h5.regular, color: textColor, flex: 1 },
              styles.title,
            ]}
          />
        </View>
        {arrowRight ? <Icon name={ICON_NAMES.ARROW.RIGHT} /> : null}
      </View>
    </TouchableOpacity>
  );
};

export default MenuLink;
