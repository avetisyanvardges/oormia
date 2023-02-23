import React from 'react';
import {Pressable, View} from 'react-native';
import {Styles} from './style';
import {useSelector} from 'react-redux';
import CreateButton from './createButton';
import {normalize} from 'assets/RootStyles/normalize';
import Icon from 'components/Svgs';
import {ICON_NAMES} from 'components/Svgs/icon_names';
import {Colors} from 'assets/RootStyles';

const TabBar = ({state, descriptors, navigation}) => {
  const {theme} = useSelector(({theme}) => theme);
  const styles = Styles();

  if (state?.index !== 2) {
    return (
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}>
        <View
          style={{
            paddingBottom: normalize(16),
            borderRadius: 15,
            backgroundColor: Colors.white,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            shadowColor: Colors.black,
            shadowOffset: {width: 2, height: 2},
            elevation: 15,
          }}>
          {state?.routes.map((route, index) => {
            const isFocused = state.index === index;
            const {options} = descriptors[route.key];
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <Pressable
                key={index}
                testID={options.tabBarTestID}
                onPress={onPress}
                accessibilityRole="button">
                {index === 0 && (
                  <View style={[styles.icon]}>
                    <Icon
                      name={ICON_NAMES.TAB_BAR.ROUTING}
                      width={normalize(25)}
                      height={normalize(25)}
                      color={Colors.grey['500']}
                    />
                  </View>
                )}
                {index === 1 && (
                  <View style={[styles.icon]}>
                    <Icon
                      name={ICON_NAMES.TAB_BAR.EVENTS}
                      width={normalize(25)}
                      height={normalize(25)}
                      color={Colors.grey['500']}
                    />
                  </View>
                )}
                {index === 2 && (
                  <CreateButton
                    theme={theme}
                    styles={styles}
                    buttonColor={Colors.blue['500']}
                  />
                )}
                {index === 3 && (
                  <View style={[styles.icon]}>
                    <Icon
                      name={ICON_NAMES.TAB_BAR.GROUP}
                      width={normalize(25)}
                      height={normalize(25)}
                      color={Colors.grey['500']}
                    />
                  </View>
                )}
                {index === 4 && (
                  <View style={[styles.icon]}>
                    <Icon
                      name={ICON_NAMES.TAB_BAR.USER}
                      width={normalize(25)}
                      height={normalize(25)}
                      color={Colors.grey['500']}
                    />
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>
      </View>
    );
  } else {
    return null;
  }
};

export default TabBar;
