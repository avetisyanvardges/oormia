import React, { useState } from 'react';
import { View, Image } from 'react-native';
import Header from 'components/Header';
import images from 'assets/images';
import { normalize } from 'assets/RootStyles/normalize';
import { CustomText } from 'components/Text';
import { Colors, FontStyle } from 'assets/RootStyles';
import Input from 'components/Input';
import { Controller, useForm } from 'react-hook-form';
import moment from 'moment/moment';
import DatePicker from 'react-native-date-picker';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';

function SendRequest({ speaker, setScreen }) {
  const { control, handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: {
      date: new Date(),
      startDate: moment().toDate(),
      duration: '2',
    },
  });
  const [openDate, setOpenDate] = useState(false);

  return (
    <View style={{ alignItems: 'center' }}>
      <Header
        title={'Send Request'}
        backPress={() => setScreen('choose_a_speaker')}
      />
      <View style={{ alignItems: 'center', paddingVertical: normalize(10) }}>
        <Image
          source={images.speakers[speaker]}
          resizeMode="cover"
          style={{
            width: normalize(122),
            height: normalize(150),
            borderRadius: normalize(12),
            overflow: 'hidden',
          }}
        />
        <CustomText
          children={'Full Name'}
          globalStyle={{
            ...FontStyle.text_h4.medium,
            paddingTop: normalize(5),
          }}
        />
        <CustomText
          children={'Position'}
          globalStyle={{
            ...FontStyle.text_h5.regular,
          }}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          alignSelf: 'flex-start',
          paddingLeft: normalize(10),
          paddingVertical: normalize(5),
        }}>
        <CustomText
          children={'FREE DATE/TIME'}
          globalStyle={{
            ...FontStyle.text_h4.regular,
            color: Colors.grey['300'],
            marginLeft: normalize(10),
          }}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: normalize(343) }}>
          <Controller
            name={'date'}
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                placeholder={'Date'}
                value={moment(value).format('DD MMMM | HH:mm')}
                onChange={onChange}
                onBlur={onBlur}
                onPress={() => setOpenDate(true)}
                editable={false}
                renderRightIcon={() => (
                  <Icon
                    name={ICON_NAMES.CALENDAR}
                    color={Colors.oxford_blue['200']}
                  />
                )}
              />
            )}
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'flex-start',
          paddingLeft: normalize(10),
          paddingVertical: normalize(5),
          marginTop: normalize(10),
        }}>
        <CustomText
          children={'TOPIC OF THE VISIT'}
          globalStyle={{
            ...FontStyle.text_h4.regular,
            color: Colors.grey['300'],
            marginLeft: normalize(10),
          }}
        />
      </View>
      <View style={{ width: normalize(343) }}>
        <Controller
          name={'topic'}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              placeholder={'Topic of the visit'}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              renderRightIcon={() => (
                <Icon
                  name={ICON_NAMES.TOPIC}
                  color={Colors.oxford_blue['200']}
                />
              )}
            />
          )}
        />
      </View>
      <DatePicker
        modal
        open={openDate}
        mode={'datetime'}
        date={getValues('date')}
        minimumDate={new Date()}
        onConfirm={date => {
          setOpenDate(false);
          setValue('date', date);
          setValue('start_time', date);
          // onChange(date);
        }}
        onCancel={() => {
          setOpenDate(false);
        }}
      />
    </View>
  );
}

export default SendRequest;
