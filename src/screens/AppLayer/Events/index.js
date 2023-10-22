import React, { useCallback } from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Colors, FontStyle, fullScreen } from 'assets/RootStyles';
import { normalize } from 'assets/RootStyles/normalize';
import images from 'assets/images';
import { BlurView } from '@react-native-community/blur';
import { CustomText } from 'components/Text';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import moment from 'moment/moment';
import { back, navigate } from 'services/NavigationService';
import { deviceInfo } from 'assets/deviceInfo';

function EventsScreen(props) {
  const renderPromotionItem = useCallback(() => {
    return (
      <View>
        <View
          style={{
            width: fullScreen.width * 0.9,
            height: normalize(150),
            borderRadius: normalize(24),
            backgroundColor: Colors.oxford_blue['500'],
            marginBottom: normalize(10),
          }}>
          <Image
            source={images.event}
            style={{
              width: fullScreen.width * 0.8,
              height: normalize(150),
              justifyContent: 'flex-end',
            }}
            borderRadius={normalize(24)}
          />
          <View
            style={{
              borderRadius: normalize(24),
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
              overflow: 'hidden',
              flex: 1,
              width: '100%',
              backgroundColor: 'transparent',
              position: 'absolute',
              bottom: 0,
            }}>
            <BlurView
              blurType={'dark'}
              blurAmount={1}
              reducedTransparencyFallbackColor="rgba(37,42,54,.25)"
              style={[
                {
                  width: '100%',
                  height: normalize(60),
                  paddingHorizontal: normalize(8),
                },
              ]}>
              <View>
                <CustomText
                  children={'Event name'}
                  globalStyle={{
                    ...FontStyle.text_h5.medium,
                    color: Colors.white,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: normalize(4),
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon
                    name={ICON_NAMES.CALENDAR}
                    size={normalize(18)}
                    color={Colors.white}
                  />
                  <CustomText
                    children={`${moment().format('DD MMM YYYY')}`}
                    globalStyle={{
                      ...FontStyle.text_h6.regular,
                      color: Colors.white,
                      marginLeft: normalize(8),
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: normalize(16),
                  }}>
                  <Icon
                    name={ICON_NAMES.TIME}
                    size={normalize(18)}
                    color={Colors.white}
                  />
                  <CustomText
                    children={`${moment().format('HH:mm')}`}
                    globalStyle={{
                      ...FontStyle.text_h6.regular,
                      color: Colors.white,
                      marginLeft: normalize(8),
                    }}
                  />
                </View>
              </View>
            </BlurView>
          </View>
        </View>
      </View>
    );
  }, []);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        back();
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View
            style={{
              height: '95%',
              backgroundColor: Colors.white,
              borderTopRightRadius: normalize(24),
              borderTopLeftRadius: normalize(24),
            }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <FlatList
                data={[{}, {}, {}, {}, {}, {}, {}, {}]}
                renderItem={renderPromotionItem}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View style={{ width: normalize(8) }} />
                )}
                contentContainerStyle={{
                  paddingBottom: normalize(20),
                  paddingTop: normalize(10),
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default EventsScreen;
