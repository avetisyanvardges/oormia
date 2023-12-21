import React from 'react';
import ScreenMask from '../../../components/screenMask';
import { CustomText } from 'components/Text';
import Input from 'components/Input';
import { View } from 'react-native';
import Button from 'components/Button';
import { styles } from './style';
import BtnGoBack from 'components/BtnGoBack';
import { Controller, useForm } from 'react-hook-form';
import dispatch from 'utils/dispatch/dispatch';
import { resetPassword } from 'state/user/operations/resetPassword';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { normalize } from 'assets/RootStyles/normalize';
import Header from 'components/Header';
import { Colors } from 'assets/RootStyles';

function ForgotScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isValid, isDirty },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });
  const onSubmit = values => {
    dispatch(resetPassword(values));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <Header
        title={'Forgot password'}
        backIconContainer={{
          shadowOpacity: 0,
          backgroundColor: Colors.purple['200'],
        }}
      />
      <View style={{ flex: 1, paddingHorizontal: normalize(16) }}>
        <Controller
          name={'email'}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              placeholder="Enter mobile or e-mail"
              value={value}
              onChange={onChange}
              errorText={value && errors.email}
              onBlur={onBlur}
            />
          )}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: insets.bottom + normalize(30),
          }}>
          <Button
            title="Send"
            textStyle={styles.buttonText}
            onPress={handleSubmit(onSubmit)}
            disabled={!(isValid && isDirty)}
          />
        </View>
      </View>
    </View>
  );
}

export default ForgotScreen;
