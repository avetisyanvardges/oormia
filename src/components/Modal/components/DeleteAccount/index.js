import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import dispatch from 'utils/dispatch/dispatch';
import { hideModal } from 'state/modal';
import { CustomText } from 'components/Text';
import { Colors, FontStyle } from 'assets/RootStyles';
import { normalize } from 'assets/RootStyles/normalize';
import Button from 'components/Button';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { deleteUser } from 'state/user/operations/deleteUser';
import { useSelector } from 'react-redux';
import { logout } from 'state/user';
import { replace } from 'services/NavigationService';
import { routNames } from 'constants/routNames';

const DeleteAccount = () => {
  const { currentUser } = useSelector(({ user }) => user);

  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      tickets: '',
      price: '',
      currency: '',
    },
  });

  const onSubmit = () => {
    dispatch(
      deleteUser({
        id: currentUser.id,
        callback: () => {
          dispatch(hideModal());
          dispatch(logout());
          replace(routNames.AUTH_LAYER);
        },
      }),
    );
  };

  return (
    <View
      style={{
        justifyContent: 'flex-end',
      }}>
      <View style={{ alignItems: 'center' }}>
        <View>
          <Icon
            name={ICON_NAMES.TAB_BAR.PROFILE}
            size={normalize(80)}
            color={Colors.oxford_blue['50']}
          />
          <View
            style={{
              bottom: 0,
              left: normalize(50),
              position: 'absolute',
            }}>
            <Icon
              name={ICON_NAMES.WARNING}
              size={normalize(30)}
              color={Colors.red['500']}
            />
          </View>
        </View>
        <View style={{ marginTop: normalize(10) }}>
          <CustomText
            children={'Delete your account'}
            globalStyle={{
              ...FontStyle.text_h5.semi_bold,
              textAlign: 'center',
            }}
          />
          <CustomText
            children={
              'You will lose all your data by deleting your account. This action cannot  be undone'
            }
            globalStyle={{
              ...FontStyle.text_h5.regular,
              marginTop: normalize(16),
              textAlign: 'center',
            }}
          />
        </View>
      </View>
      <View style={{ marginTop: normalize(16) }}>
        <Button
          title={'Delete Account'}
          textStyle={{ color: Colors.white }}
          containerStyle={{
            width: '100%',
            backgroundColor: Colors.red['500'],
          }}
          onPress={handleSubmit(onSubmit)}
        />
        <Button
          title={'Cancel'}
          containerStyle={{
            width: '100%',
            backgroundColor: Colors.oxford_blue['50'],
            marginTop: normalize(8),
          }}
          onPress={() => dispatch(hideModal())}
        />
      </View>
    </View>
  );
};

export default DeleteAccount;
