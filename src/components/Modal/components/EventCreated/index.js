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
import { useSelector } from 'react-redux';

const EventCreated = () => {
  const { currentUser } = useSelector(({ user }) => user);

  const { control, handleSubmit, setValue, getValues } = useForm({
    defaultValues: {
      tickets: '',
      price: '',
      currency: '',
    },
  });

  const onSubmit = () => {
    dispatch(hideModal());
  };

  return (
    <View
      style={{
        justifyContent: 'flex-end',
      }}>
      <View style={{ alignItems: 'center' }}>
        <View>
          <Icon name={ICON_NAMES.EVENT_WARNING} size={normalize(150)} />
        </View>
        <View style={{ marginTop: normalize(10) }}>
          <CustomText
            children={'Event Submission Confirmation'}
            globalStyle={{
              ...FontStyle.text_h4.semi_bold,
              textAlign: 'center',
            }}
          />
          <CustomText
            children={
              'Your request to create an event has been submitted. It will undergo moderation and will be available in the feed once approved.'
            }
            globalStyle={{
              ...FontStyle.text_h5.regular,
              marginTop: normalize(16),
              textAlign: 'center',
              color: Colors.oxford_blue['200'],
            }}
          />
        </View>
      </View>
      <View style={{ marginTop: normalize(20) }}>
        <Button
          title={'Okay'}
          textStyle={{ color: Colors.white }}
          containerStyle={{
            width: '100%',
          }}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

export default EventCreated;
