import React from 'react';
import {View} from 'react-native';
import Icon from 'components/Svgs';
import {ICON_NAMES} from 'components/Svgs/icon_names';
import {normalize} from 'assets/RootStyles/normalize';
import {CustomText} from 'components/Text';
import {FontStyle} from 'assets/RootStyles';

const HomeHeaderComponent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: normalize(16),
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CustomText
          children={'Find nearby event'}
          globalStyle={{
            ...FontStyle.text_h3.medium,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View>
          <Icon name={ICON_NAMES.NOTIFICATION} />
        </View>
        <View style={{marginLeft: normalize(8)}}>
          <Icon name={ICON_NAMES.MESSAGE} />
        </View>
      </View>
    </View>
  );
};

export default HomeHeaderComponent;
