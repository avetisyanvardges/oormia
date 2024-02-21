import React, { useCallback, useLayoutEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import dispatch from 'utils/dispatch/dispatch';
import { fetchAllUsers } from 'state/user/operations/fetchAllUsers';
import { FlatList } from 'react-native-gesture-handler';
import Button from 'components/Button';
import { inviteMember } from 'state/groups';
import MImage from 'components/MImage';
import CheckBox from '@react-native-community/checkbox';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { isEmpty } from 'lodash';

const InviteMembersScreen = ({ route }) => {
  const insets = useSafeAreaInsets();
  const { users } = useSelector(({ user }) => user);
  const { invited_members } = useSelector(({ groups }) => groups);
  const [members, setMembers] = useState(invited_members);

  useLayoutEffect(() => {
    dispatch(
      fetchAllUsers({
        params: {
          page: 0,
          size: 100,
        },
      }),
    );
  }, []);

  const selectMember = id => {
    if (members.includes(id)) {
      setMembers(prevState => prevState.filter(mem => mem !== id));
    } else {
      setMembers([...members, id]);
    }
  };

  const renderUsers = ({ item }) => {
    const invited = members?.includes(item.id);
    const mutatedImage = item?.pictures?.[
      item?.pictures.length - 1
    ]?.fileDownloadUri?.replace(':8085', ':8086');
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{ flex: 1 }}
        onPress={() => selectMember(item.id)}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <MImage
            source={{ uri: mutatedImage }}
            style={{
              width: normalize(100),
              height: normalize(100),
              borderRadius: normalize(50),
              backgroundColor: Colors.white,
              overflow: 'hidden',
            }}
            type={'profile'}
            firstChar={item?.firstName?.split('')?.[0]?.toUpperCase()}
          />
          <CustomText
            children={`${item.firstName} ${item.lastName}`}
            ellipsizeMode={'tail'}
            numberOfLines={1}
            globalStyle={{
              ...FontStyle.text_h6.regular,
              marginLeft: normalize(8),
            }}
          />
          <View style={{ position: 'absolute', top: 0, right: 5 }}>
            <CheckBox
              disabled={true}
              value={invited}
              onValueChange={() => {}}
              tintColor={'transparent'}
              onFillColor={Colors.purple['500']}
              onTintColor={Colors.purple['500']}
              onCheckColor={Colors.white}
              onAnimationType={'one-stroke'}
              offAnimationType={'one-stroke'}
              style={{ borderRadius: normalize(5) }}
            />
          </View>
        </View>
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
              height: `${normalize(85)}%`,
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
                data={users.filter(it => it.firstName)}
                renderItem={renderUsers}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View style={{ height: normalize(8) }} />
                )}
                contentContainerStyle={{
                  marginTop: normalize(16),
                  paddingBottom: normalize(50),
                }}
                numColumns={3}
              />
              <View style={{ paddingBottom: insets.bottom || normalize(16) }}>
                <Button
                  title={'continue'}
                  textStyle={{
                    ...FontStyle.text_h5.medium,
                    color: Colors.white,
                  }}
                  onPress={() => {
                    dispatch(inviteMember(members));
                    back();
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

export default InviteMembersScreen;
