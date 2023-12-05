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

function ForgotScreen({ navigation }) {
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
    <ScreenMask style={styles.screenMask}>
      <View style={styles.btnBack}>
        <BtnGoBack />
        <CustomText
          children="Account Recovery"
          globalStyle={styles.firstText}
        />
      </View>
      <CustomText
        children="A reset link will be sent your email"
        globalStyle={styles.secondText}
      />
      <View>
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
        <View style={styles.line} />
        <Button
          title="Send"
          containerStyle={styles.button}
          textStyle={styles.buttonText}
          onPress={handleSubmit(onSubmit)}
          disabled={!(isValid && isDirty)}
        />
      </View>
    </ScreenMask>
  );
}

export default ForgotScreen;
