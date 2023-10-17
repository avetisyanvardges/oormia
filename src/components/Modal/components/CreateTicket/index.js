import React from 'react';
import {Image, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';
import dispatch from 'utils/dispatch/dispatch';
import {showModal} from 'state/modal';
import Input from 'components/Input';
import {CustomText} from 'components/Text';
import {Colors, FontStyle} from 'assets/RootStyles';
import {normalize} from 'assets/RootStyles/normalize';
import images from 'assets/images';
import Button from 'components/Button';

const CreateTicket = () => {
  const {control, handleSubmit, setValue, getValues} = useForm({
    defaultValues: {
      tickets: '',
      price: '',
      currency: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
    dispatch(showModal({type: 'create_ticket'}));
  };

  return (
    <View
      style={{
        justifyContent: 'flex-end',
      }}>
      <View>
        <CustomText
          children={'Create Ticket'}
          globalStyle={{...FontStyle.text_h5.regular}}
        />
      </View>
      <Controller
        control={control}
        render={({field: {value, onChange, onBlur}}) => (
          <Input
            label={'Available tickets'}
            placeholder={'Type number'}
            keyboardType={'numeric'}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
        name={'tickets'}
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flex: 1, marginRight: normalize(10)}}>
          <Controller
            control={control}
            render={({field: {value, onChange, onBlur}}) => (
              <Input
                label={'Price per ticket'}
                placeholder={'Type number'}
                keyboardType={'numeric'}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
            name={'price'}
          />
        </View>
        <View style={{flex: 1}}>
          <Controller
            control={control}
            render={({field: {value, onChange, onBlur}}) => (
              <Input
                label={'Currency'}
                placeholder={'Select'}
                keyboardType={'numeric'}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
            name={'currency'}
          />
        </View>
      </View>
      <View>
        <CustomText children={'QR code'} />
        <View style={{alignItems: 'center', marginTop: normalize(10)}}>
          <Image
            source={images.qr}
            style={{width: normalize(150), height: normalize(150)}}
          />
        </View>
      </View>
      <View style={{marginTop: normalize(16)}}>
        <Button
          title={'Create ticket'}
          textStyle={{color: Colors.white}}
          containerStyle={{
            width: '100%',
          }}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default CreateTicket;
