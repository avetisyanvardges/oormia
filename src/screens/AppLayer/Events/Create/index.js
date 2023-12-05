import React from 'react';
import Geocoder from 'react-native-geocoding';
import { Pressable, Text, View } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle, Shadow } from 'assets/RootStyles';
import useContainer from 'screens/AppLayer/Events/Create/hook';
import Header from 'components/Header';
import { back } from 'services/NavigationService';

Geocoder.init('AIzaSyBdStOT9aHzvGXGWzR39CUsOX199NEHJ7M');
const CreateEvent = ({ navigation, route, goBack }) => {
  const { insets, screens, screen, setScreen } = useContainer({ route });
  const tabsVisible =
    screen === 'choose_category' || screen === 'choose_a_speaker';

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.grey['50'],
      }}>
      {tabsVisible ? (
        <View>
          <Header title={''} backPress={() => back()} />
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: normalize(16),
              paddingBottom: normalize(16),
              ...Shadow,
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
                    ? Colors.purple['500']
                    : Colors.white,
                paddingVertical: normalize(8),
                ...Shadow,
              }}>
              <Text
                style={{
                  ...FontStyle.text_h5.regular,
                  color:
                    screen !== 'choose_category'
                      ? Colors.purple['500']
                      : Colors.white,
                }}>
                Create event
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
                    ? Colors.purple['500']
                    : Colors.white,
                paddingVertical: normalize(8),
                ...Shadow,
              }}>
              <Text
                style={{
                  ...FontStyle.text_h5.regular,
                  color:
                    screen !== 'choose_a_speaker'
                      ? Colors.purple['500']
                      : Colors.white,
                }}>
                Send a request
              </Text>
            </Pressable>
          </View>
        </View>
      ) : null}
      {screens[screen] ? screens[screen] : null}
    </View>
  );
};

export { CreateEvent };
