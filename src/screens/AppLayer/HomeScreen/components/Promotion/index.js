import React, {useCallback} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {normalize} from 'assets/RootStyles/normalize';
import {Colors, FontStyle, fullScreen} from 'assets/RootStyles';
import Underline from 'components/Underline';
import images from 'assets/images';
import {BlurView} from '@react-native-community/blur';
import {CustomText} from 'components/Text';
import {ICON_NAMES} from 'components/Svgs/icon_names';
import Icon from 'components/Svgs';
import moment from 'moment';
import {navigate} from 'services/NavigationService';

const PromotionComponent = () => {
  const renderPromotionItem = useCallback(() => {
    return (
      <View>
        <View
          style={{
            width: fullScreen.width * 0.8,
            height: normalize(150),
            borderRadius: normalize(24),
            backgroundColor: Colors.oxford_blue['500'],
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
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
    <View>
      <View
        style={{
          marginHorizontal: normalize(16),
          margin: normalize(10),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{...FontStyle.text_h4.regular}}>Your Promotions Hub</Text>
        <TouchableOpacity
          onPress={() => navigate('EventsScreen', {...renderPromotionItem})}>
          <Text
            style={{
              ...FontStyle.text_h5.regular,
              color: Colors.oxford_blue['200'],
            }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={[{}, {}, {}, {}, {}, {}, {}, {}]}
        renderItem={renderPromotionItem}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{width: normalize(8)}} />}
        contentContainerStyle={{paddingHorizontal: normalize(16)}}
      />
      <View
        style={{
          marginHorizontal: normalize(16),
          marginVertical: normalize(16),
        }}>
        <Underline height={normalize(1.5)} />
      </View>
    </View>
  );
};

export default PromotionComponent;
