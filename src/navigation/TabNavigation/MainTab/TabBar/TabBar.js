import React from 'react';
import { Pressable, View } from 'react-native';
import { Styles } from './style';
import { useSelector } from 'react-redux';
import CreateButton from './createButton';
import { normalize } from 'assets/RootStyles/normalize';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { Colors, FontStyle, Shadow } from 'assets/RootStyles';
import { CustomText } from 'components/Text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();
  const { theme } = useSelector(({ theme }) => theme);
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
            paddingTop: normalize(5),
            paddingBottom: insets.bottom / 1.5,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: Colors.white,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            ...Shadow,
          }}>
          {state?.routes.map((route, index) => {
            const isFocused = state.index === index;
            const { options } = descriptors[route.key];
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
                accessibilityRole="button"
                style={{ flex: 1, alignItems: 'center' }}>
                {index === 0 && (
                  <>
                    <Icon
                      name={ICON_NAMES.TAB_BAR.HOME}
                      width={normalize(24)}
                      height={normalize(24)}
                      color={Colors.oxford_blue[isFocused ? '500' : '100']}
                    />
                    <CustomText
                      children={'Home'}
                      globalStyle={{
                        ...FontStyle.text_h6.regular,
                        color: Colors.oxford_blue[isFocused ? '500' : '100'],
                      }}
                    />
                  </>
                )}
                {index === 1 && (
                  <>
                    <Icon
                      name={ICON_NAMES.TAB_BAR.MAP}
                      width={normalize(24)}
                      height={normalize(24)}
                      color={Colors.oxford_blue[isFocused ? '500' : '100']}
                    />
                    <CustomText
                      children={'Map'}
                      globalStyle={{
                        ...FontStyle.text_h6.regular,
                        color: Colors.oxford_blue[isFocused ? '500' : '100'],
                      }}
                    />
                  </>
                )}
                {index === 2 && (
                  <CreateButton
                    theme={theme}
                    styles={styles}
                    buttonColor={Colors.blue['500']}
                  />
                )}
                {index === 3 && (
                  <>
                    <Icon
                      name={ICON_NAMES.TAB_BAR.TICKET}
                      width={normalize(24)}
                      height={normalize(24)}
                      color={Colors.oxford_blue[isFocused ? '500' : '100']}
                    />
                    <CustomText
                      children={'Tickets'}
                      globalStyle={{
                        ...FontStyle.text_h6.regular,
                        color: Colors.oxford_blue[isFocused ? '500' : '100'],
                      }}
                    />
                  </>
                )}
                {index === 4 && (
                  <>
                    <Icon
                      name={ICON_NAMES.TAB_BAR.PROFILE}
                      width={normalize(24)}
                      height={normalize(24)}
                      color={Colors.oxford_blue[isFocused ? '500' : '100']}
                    />
                    <CustomText
                      children={'Profile'}
                      globalStyle={{
                        ...FontStyle.text_h6.regular,
                        color: Colors.oxford_blue[isFocused ? '500' : '100'],
                      }}
                    />
                  </>
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
