import React, { useEffect, useState } from 'react';
import Geocoder from 'react-native-geocoding';
import { Pressable, Text, View } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';
import useContainer from 'screens/AppLayer/CreateEvent/hook';
import Header from 'components/Header';
import { back } from 'services/NavigationService';

Geocoder.init('AIzaSyA3JgEsDXQmVnH6HQOVHzSpta2wKAN2Tf0');
const CreateEvent = ({ navigation, route, goBack }) => {
  const { insets, screens, screen, setScreen } = useContainer({ route });
  const tabsVisible =
    screen === 'choose_category' || screen === 'choose_a_speaker';

  return (
    <View
      style={{
        flex: 1,
        paddingTop: normalize(50),
        backgroundColor: Colors.grey['50'],
      }}>
      {tabsVisible ? (
        <>
          <Header title={'Create event'} backPress={() => back()} />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: normalize(16),
            }}>
            <Pressable
              onPress={() => setScreen('choose_category')}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopLeftRadius: normalize(8),
                borderBottomLeftRadius: normalize(8),
                backgroundColor:
                  screen === 'choose_category'
                    ? Colors.oxford_blue['500']
                    : Colors.white,
                paddingVertical: normalize(8),
              }}>
              <Text
                style={{
                  ...FontStyle.text_h5.regular,
                  color:
                    screen !== 'choose_category'
                      ? Colors.oxford_blue['500']
                      : Colors.white,
                }}>
                Choose a category
              </Text>
            </Pressable>
            <Pressable
              onPress={() => setScreen('choose_a_speaker')}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderTopRightRadius: normalize(8),
                borderBottomRightRadius: normalize(8),
                backgroundColor:
                  screen === 'choose_a_speaker'
                    ? Colors.oxford_blue['500']
                    : Colors.white,
                paddingVertical: normalize(8),
              }}>
              <Text
                style={{
                  ...FontStyle.text_h5.regular,
                  color:
                    screen !== 'choose_a_speaker'
                      ? Colors.oxford_blue['500']
                      : Colors.white,
                }}>
                Choose a speaker
              </Text>
            </Pressable>
          </View>
        </>
      ) : null}
      {screens[screen] ? screens[screen] : null}
    </View>
  );
};

export { CreateEvent };
