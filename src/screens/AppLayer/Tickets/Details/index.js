import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Header from 'components/Header';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';
import MImage from 'components/MImage';
import { CustomText } from 'components/Text';
import moment from 'moment/moment';
import { TicketCard } from 'components/Svgs/TicketCard';

const TicketDetails = ({ navigation, route }) => {
  const [layoutWidth, setLayoutWidth] = useState(0);
  const [dotCount, setDotCount] = useState(5);
  const { event } = route?.params;
  const base64 = 'data:image/png;base64,';
  const onLayout = e => {
    setLayoutWidth(e.nativeEvent.layout.width);
  };

  useEffect(() => {
    if (layoutWidth) {
      setDotCount((layoutWidth / 50).toFixed(2));
    }
  }, [layoutWidth]);

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: normalize(40) }}>
      <Header title={'My tickets'} backPress={() => navigation.goBack()} />
      <View style={{ flex: 1, marginTop: normalize(20) }}>
        <View
          style={{
            marginHorizontal: normalize(16),
            backgroundColor: Colors.white,
            borderTopLeftRadius: normalize(16),
            borderTopRightRadius: normalize(16),
          }}>
          <MImage
            source={{
              uri:
                event?.pictures?.[0]?.fileDownloadUri ||
                event?.preferences?.[0]?.picture?.fileDownloadUri,
            }}
            style={{
              width: '100%',
              height: normalize(180),
              borderTopLeftRadius: normalize(16),
              borderTopRightRadius: normalize(16),
            }}
          />
          <View style={{ paddingHorizontal: normalize(16) }}>
            <View style={{ marginTop: normalize(20) }}>
              <CustomText
                children={event.name}
                globalStyle={{
                  ...FontStyle.text_h4.medium,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: normalize(20),
              }}>
              <View>
                <CustomText
                  children={'Date'}
                  globalStyle={{
                    ...FontStyle.text_h5.regular,
                    color: Colors.oxford_blue['100'],
                  }}
                />
                <CustomText
                  children={moment(event.startDate).format('ddd, MMM D, YYYY')}
                  globalStyle={{
                    ...FontStyle.text_h4.regular,
                  }}
                />
              </View>
              <View style={{ marginLeft: normalize(20) }}>
                <CustomText
                  children={'Time'}
                  globalStyle={{
                    ...FontStyle.text_h5.regular,
                    color: Colors.oxford_blue['100'],
                  }}
                />
                <CustomText
                  children={moment(event.startDate).format('HH:mm')}
                  globalStyle={{
                    ...FontStyle.text_h4.regular,
                  }}
                />
              </View>
            </View>

            <View style={{ marginVertical: normalize(20) }}>
              <CustomText
                children={'Place'}
                globalStyle={{
                  ...FontStyle.text_h5.regular,
                  color: Colors.oxford_blue['100'],
                }}
              />
              <CustomText
                children={event?.address}
                globalStyle={{
                  ...FontStyle.text_h4.regular,
                }}
              />
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: -normalize(88),
            }}>
            <TicketCard width={layoutWidth} />
          </View>
        </View>
        <View
          onLayout={onLayout}
          style={{
            marginHorizontal: normalize(16),
            backgroundColor: Colors.white,
            borderBottomLeftRadius: normalize(16),
            borderBottomRightRadius: normalize(16),
            marginTop: normalize(55),
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: normalize(10),
            }}>
            <MImage
              source={{ uri: base64 + event?.qr?.[0]?.qr }}
              style={{
                width: normalize(160),
                height: normalize(160),
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TicketDetails;
