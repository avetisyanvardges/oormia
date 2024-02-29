import React from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { back, navigate } from 'services/NavigationService';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';
import { CustomText } from 'components/Text';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import Underline from 'components/Underline';
import { useSelector } from 'react-redux';
import { routNames } from 'constants/routNames';
import dispatch from 'utils/dispatch/dispatch';
import { deleteEvent } from 'state/events/operations/deleteEvent';

const MoreState = ({ route }) => {
  const { event, adm } = route.params || {};
  const { currentUser } = useSelector(({ user }) => user);
  const creator = currentUser?.id === event?.creator?.id;
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
              height: creator ? `${normalize(30)}%` : `${normalize(40)}%`,
              paddingHorizontal: normalize(16),
              paddingTop: normalize(24),
              backgroundColor: Colors.white,
              borderTopRightRadius: normalize(24),
              borderTopLeftRadius: normalize(24),
            }}>
            <View style={{ flex: 1 }}>
              <CustomText
                children={'More'}
                globalStyle={{
                  ...FontStyle.text_h3.medium,
                }}
              />
              {adm ? (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      // dispatch(acceptEvent({ id: event.id }));
                    }}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: normalize(12),
                    }}>
                    <Icon name={ICON_NAMES.EDIT} size={normalize(24)} />
                    <CustomText
                      children={'Approve event'}
                      globalStyle={{
                        ...FontStyle.text_h5.regular,
                        marginLeft: normalize(10),
                      }}
                    />
                  </TouchableOpacity>
                  <Underline style={{ marginVertical: normalize(16) }} />
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(
                        deleteEvent({
                          id: event.id,
                        }),
                      );
                    }}
                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={ICON_NAMES.REMOVE} color={Colors.red['500']} />
                    <CustomText
                      children={'Delete event'}
                      globalStyle={{
                        ...FontStyle.text_h5.regular,
                        color: Colors.red['500'],
                        marginLeft: normalize(10),
                      }}
                    />
                  </TouchableOpacity>
                  <Underline style={{ marginTop: normalize(16) }} />
                </View>
              ) : creator ? (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigate(routNames.CREATE_EVENT, {
                        screen: 'update',
                        id: event.id,
                      });
                    }}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: normalize(12),
                    }}>
                    <Icon name={ICON_NAMES.EDIT} size={normalize(24)} />
                    <CustomText
                      children={'Edit event'}
                      globalStyle={{
                        ...FontStyle.text_h5.regular,
                        marginLeft: normalize(10),
                      }}
                    />
                  </TouchableOpacity>
                  <Underline style={{ marginVertical: normalize(16) }} />
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(
                        deleteEvent({
                          id: event.id,
                        }),
                      );
                    }}
                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name={ICON_NAMES.REMOVE} color={Colors.red['500']} />
                    <CustomText
                      children={'Delete event'}
                      globalStyle={{
                        ...FontStyle.text_h5.regular,
                        color: Colors.red['500'],
                        marginLeft: normalize(10),
                      }}
                    />
                  </TouchableOpacity>
                  <Underline style={{ marginTop: normalize(16) }} />
                </View>
              ) : null}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MoreState;
