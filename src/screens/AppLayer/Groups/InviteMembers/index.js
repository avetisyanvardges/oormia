import React, { useLayoutEffect } from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { back } from 'services/NavigationService';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';
import { CustomText } from 'components/Text';
import { useSelector } from 'react-redux';
import dispatch from 'utils/dispatch/dispatch';
import { fetchAllUsers } from 'state/user/operations/fetchAllUsers';
import { FlatList } from 'react-native-gesture-handler';
import { userFollow } from 'state/user/operations/follow';
import Button from 'components/Button';
import { inviteMember } from 'state/groups';

const InviteMembersScreen = ({ route }) => {
  const { users } = useSelector(({ user }) => user);
  const { invited_members } = useSelector(({ groups }) => groups);
  useLayoutEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  console.log(users);

  const renderUsers = ({ item }) => {
    const invited = invited_members.includes(item.id);
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              width: normalize(50),
              height: normalize(50),
              borderRadius: normalize(25),
              backgroundColor: Colors.purple['600'],
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <CustomText
              children={item?.firstName.split('')?.[0]?.toUpperCase()}
              globalStyle={{
                ...FontStyle.text_h2.semi_bold,
                color: Colors.white,
              }}
            />
          </View>
          <CustomText
            children={`${item.firstName} ${item.lastName}`}
            globalStyle={{
              ...FontStyle.text_h5.regular,
              marginLeft: normalize(8),
            }}
          />
        </View>
        <Button
          containerStyle={{
            flex: 0.3,
            paddingVertical: normalize(6),
            backgroundColor: invited ? undefined : Colors.purple['500'],
            borderWidth: invited ? 1 : 0,
            borderColor: Colors.oxford_blue['50'],
          }}
          title={invited ? 'Invited' : 'Invite'}
          textStyle={{
            ...FontStyle.text_h5.medium,
            color: invited ? Colors.purple['500'] : Colors.white,
          }}
          onPress={() => {
            dispatch(inviteMember({ id: item.id }));
          }}
        />
      </TouchableOpacity>
    );
  };

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
              height: `${normalize(90)}%`,
              paddingHorizontal: normalize(16),
              paddingTop: normalize(24),
              backgroundColor: Colors.white,
              borderTopRightRadius: normalize(24),
              borderTopLeftRadius: normalize(24),
            }}>
            <View style={{ flex: 1 }}>
              <CustomText
                children={'Invite members'}
                globalStyle={{
                  ...FontStyle.text_h3.medium,
                }}
              />

              <FlatList
                data={users}
                renderItem={renderUsers}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View style={{ height: normalize(8) }} />
                )}
                contentContainerStyle={{
                  marginTop: normalize(16),
                  paddingBottom: normalize(50),
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default InviteMembersScreen;
