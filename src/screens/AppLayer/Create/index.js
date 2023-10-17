import React, {useEffect, useState} from 'react';
import Geocoder from 'react-native-geocoding';
import {ChooseCategories} from 'screens/AppLayer/Create/components/ChooseCategories';
import {Pressable, Text, View} from 'react-native';
import {normalize} from 'assets/RootStyles/normalize';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Colors, FontStyle} from 'assets/RootStyles';
import {ChooseSpeaker} from 'screens/AppLayer/Create/components/ChooseSpeaker';
import SendRequest from 'screens/AppLayer/Create/components/SendRequest';
import AddEvent from 'screens/AppLayer/Create/components/AddEvent';

Geocoder.init('AIzaSyA3JgEsDXQmVnH6HQOVHzSpta2wKAN2Tf0');
const CreateEvent = ({navigation, route, goBack}) => {
  const [screen, setScreen] = useState('choose_category');
  const [categories, setCategories] = useState('');
  const [speaker, setSpeaker] = useState('');
  const insets = useSafeAreaInsets();

  const tabsVisible =
    screen === 'choose_category' || screen === 'choose_a_speaker';

  useEffect(() => {
    if (route?.params?.screen) {
      setScreen(route.params.screen);
    }
  }, [route]);

  const screens = {
    choose_category: (
      <ChooseCategories
        categories={categories}
        setCategories={setCategories}
        setScreen={setScreen}
      />
    ),
    choose_a_speaker: (
      <ChooseSpeaker
        speaker={speaker}
        setSpeaker={setSpeaker}
        setScreen={setScreen}
      />
    ),
    add_event: (
      <AddEvent
        categories={categories}
        setCategories={setCategories}
        setScreen={setScreen}
      />
    ),
    send_request: (
      <SendRequest
        speaker={speaker}
        setSpeaker={setSpeaker}
        setScreen={setScreen}
      />
    ),
  };

  return (
    <View
      style={{flex: 1, paddingTop: insets.top, backgroundColor: Colors.white}}>
      {tabsVisible ? (
        <View
          style={{
            flexDirection: 'row',
            borderWidth: normalize(1.5),
            marginHorizontal: normalize(16),
            borderRadius: normalize(8),
          }}>
          <Pressable
            onPress={() => setScreen('choose_category')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: normalize(6),
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
              borderRadius: normalize(6),
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
      ) : null}
      {screens[screen] ? screens[screen] : null}
    </View>
  );
};

export {CreateEvent};
