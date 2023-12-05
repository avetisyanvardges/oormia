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
import Button from 'components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function SendRequest({ speaker, setScreen }) {
  const insets = useSafeAreaInsets();
  const { control, handleSubmit, watch, setValue, getValues } = useForm({
    defaultValues: {
      date: new Date(),
      startDate: moment().toDate(),
      duration: '2',
    },
  });
  const [imageName] = speaker.name.split(' ');
  const [openDate, setOpenDate] = useState(false);
  console.log(speaker, 999);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginHorizontal: normalize(16),
      }}>
      <Header
        title={'Send Request'}
        backPress={() => setScreen('choose_a_speaker')}
        containerStyle={{ paddingHorizontal: 0 }}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          paddingVertical: normalize(10),
        }}>
        <Image
          source={images.speakers[imageName.toLowerCase()]}
          resizeMode="cover"
          style={{
            width: normalize(122),
            height: normalize(150),
            borderRadius: normalize(12),
            overflow: 'hidden',
          }}
        />
        <CustomText
          children={speaker.name}
          globalStyle={{
            ...FontStyle.text_h4.medium,
            paddingTop: normalize(5),
          }}
        />
        <CustomText
          children={speaker.position}
          globalStyle={{
            ...FontStyle.text_h5.medium,
            color: Colors.oxford_blue['300'],
          }}
        />
        <CustomText
          children={speaker.about}
          globalStyle={{
            ...FontStyle.text_h5.regular,
          }}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View>
          <Controller
            name={'date'}
            control={control}
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                placeholder={'Date'}
                label={'Free date | time'}
                value={moment(value).format('DD MMMM | HH:mm')}
                onChange={onChange}
                onBlur={onBlur}
                onPress={() => setOpenDate(true)}
                editable={false}
                renderRightIcon={() => (
                  <Icon
                    name={ICON_NAMES.CALENDAR}
                    color={Colors.purple['500']}
                  />
                )}
              />
            )}
          />
        </View>
      </View>
      <View>
        <Controller
          name={'topic'}
          control={control}
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              placeholder={'Topic of the visit'}
              label={'Topic of the visit'}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              renderRightIcon={() => (
                <Icon name={ICON_NAMES.TOPIC} color={Colors.purple['500']} />
              )}
            />
          )}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: insets.bottom + normalize(8),
        }}>
        <Button title={'Send'} textStyle={{ color: Colors.white }} />
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
