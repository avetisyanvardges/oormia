import React, { useState } from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { back, navigate } from 'services/NavigationService';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle, Shadow } from 'assets/RootStyles';
import { CustomText } from 'components/Text';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import Underline from 'components/Underline';
import { useSelector } from 'react-redux';
import { routNames } from 'constants/routNames';
import dispatch from 'utils/dispatch/dispatch';
import { deleteEvent } from 'state/events/operations/deleteEvent';
import CustomSwitch from 'components/CustomSwitch';
import Button from 'components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { joinEvent } from 'state/events/operations/joinEvent';

const BuyTicketScreen = ({ route }) => {
  const [ticketCount, setTicketCount] = useState(1);
  const [taxiNeeded, setTaxiNeeded] = useState(false);
  const { event } = route.params;
  const { currentUser } = useSelector(({ user }) => user);
  const insets = useSafeAreaInsets();
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
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View
            style={{
              height: `${normalize(30)}%`,
              paddingHorizontal: normalize(16),
              paddingTop: normalize(24),
              backgroundColor: Colors.white,
              borderTopRightRadius: normalize(24),
              borderTopLeftRadius: normalize(24),
            }}>
            <View style={{ flex: 1 }}>
              <CustomText
                children={'Buy ticket'}
                globalStyle={{
                  ...FontStyle.text_h3.medium,
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: normalize(16),
                }}>
                <CustomText
                  children={'Tickets'}
                  globalStyle={{ ...FontStyle.text_h4.regular }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (ticketCount > 1) {
                        setTicketCount(ticketCount - 1);
                      }
                    }}
                    activeOpacity={0.9}
                    style={{
                      width: normalize(30),
                      height: normalize(30),
                      borderRadius: normalize(20),
                      backgroundColor:
                        ticketCount > 1
                          ? Colors.white
                          : Colors.oxford_blue['200'],
                      alignItems: 'center',
                      justifyContent: 'center',
                      ...Shadow,
                    }}>
                    <Icon
                      name={ICON_NAMES.MINUS}
                      color={Colors.purple['500']}
                    />
                  </TouchableOpacity>
                  <CustomText
                    children={ticketCount}
                    globalStyle={{
                      ...FontStyle.display_h6.regular,
                      paddingHorizontal: normalize(16),
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setTicketCount(ticketCount + 1);
                    }}
                    activeOpacity={0.9}
                    style={{
                      width: normalize(30),
                      height: normalize(30),
                      borderRadius: normalize(20),
                      backgroundColor: Colors.purple['500'],
                      alignItems: 'center',
                      justifyContent: 'center',
                      ...Shadow,
                    }}>
                    <Icon name={ICON_NAMES.PLUS} color={Colors.white} />
                  </TouchableOpacity>
                </View>
              </View>
              {/*<View*/}
              {/*  style={{*/}
              {/*    flexDirection: 'row',*/}
              {/*    alignItems: 'center',*/}
              {/*    justifyContent: 'space-between',*/}
              {/*    marginTop: normalize(16),*/}
              {/*  }}>*/}
              {/*  <CustomText*/}
              {/*    children={'Taxi'}*/}
              {/*    globalStyle={{ ...FontStyle.text_h4.regular }}*/}
              {/*  />*/}
              {/*  <View>*/}
              {/*    <CustomSwitch*/}
              {/*      activeColor={Colors.purple['500']}*/}
              {/*      inActiveColor={Colors.oxford_blue['30']}*/}
              {/*      active={taxiNeeded}*/}
              {/*      setActive={setTaxiNeeded}*/}
              {/*    />*/}
              {/*  </View>*/}
              {/*</View>*/}
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  marginBottom: insets.bottom ? insets.bottom : normalize(16),
                }}>
                <Button
                  title={`Buy ticket ${
                    event?.price ? ticketCount * event?.price : ''
                  }`}
                  textStyle={{
                    ...FontStyle.text_h5.medium,
                    color: Colors.white,
                  }}
                  onPress={() => {
                    const body = {
                      eventId: event?.id,
                      fromLat: 0,
                      fromLon: 0,
                      needTaxi: false,
                      passengersCount: 0,
                      ticketCount: ticketCount,
                    };
                    dispatch(
                      joinEvent({
                        body,
                      }),
                    );
                  }}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BuyTicketScreen;
