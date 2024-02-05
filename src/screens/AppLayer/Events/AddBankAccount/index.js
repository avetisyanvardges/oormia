import React, { useEffect } from 'react';
import { View } from 'react-native';
import Header from 'components/Header';
import DropDown from 'components/DropDown';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';
import Input from 'components/Input';
import { CustomText } from 'components/Text';
import Button from 'components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Controller, useForm } from 'react-hook-form';
import moment from 'moment/moment';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';
import { useSelector } from 'react-redux';
import dispatch from 'utils/dispatch/dispatch';
import { set_selected_bank } from 'state/events';

const AddBankAccountScreen = () => {
  const { selected_bank } = useSelector(({ events }) => events);
  const insets = useSafeAreaInsets();
  const { control, handleSubmit, watch, setValue, getValues, reset } = useForm({
    defaultValues: {
      data: {
        bank: '',
        account_number: '',
        account_name: '',
      },
      pictures: [],
    },
  });

  useEffect(() => {
    return () => {
      dispatch(set_selected_bank({}));
    };
  }, []);

  useEffect(() => {
    if (selected_bank?.name) {
      setValue('bank', selected_bank?.name);
    }
  }, [selected_bank?.name]);

  return (
    <View style={{ flex: 1 }}>
      <Header title={'Add Bank Account'} />
      <View style={{ flex: 1, marginHorizontal: normalize(16) }}>
        <View>
          <CustomText
            children={
              "Welcome to the financial hub of your success! By adding your bank account, you're ensuring that the fruits of your event creation efforts are effortlessly deposited into your account. This streamlined process ensures that ticket sales revenue flows directly to you, providing a hassle-free experience.\n" +
              '\n' +
              "Simply follow the easy steps below to link your bank account securely and enjoy the convenience of automatic payouts. Your success deserves to be rewarded promptly – let's make sure you don't miss a beat.\n"
            }
            globalStyle={{
              ...FontStyle.text_h5.regular,
              color: Colors.oxford_blue['300'],
            }}
          />
        </View>
        <Controller
          name={'bank'}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <DropDown
              value={value}
              placeholder={'select_bank'}
              label={'select_bank'}
              containerStyle={{ backgroundColor: Colors.white }}
              onPress={() => navigate(routNames.SELECT_BANK)}
            />
          )}
        />
        <Controller
          name={'account_number'}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label={'account_number'}
              placeholder={'account_number'}
              backgroundColor={Colors.white}
              keyboardType={'numeric'}
            />
          )}
        />
        <Controller
          name={'account_name'}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              label={'account_name'}
              placeholder={'account_name'}
              backgroundColor={Colors.white}
            />
          )}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: insets.bottom || normalize(16),
          }}>
          <Button
            title={'add'}
            textStyle={{ color: Colors.white }}
            onPress={() =>
              navigate(routNames.CREATE_EVENT, {
                screen: 'choose_category',
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

export default AddBankAccountScreen;
