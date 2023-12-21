import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { CustomText } from 'components/Text';
import { FontStyle } from 'assets/RootStyles';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { routNames } from 'constants/routNames';
import { navigate } from 'services/NavigationService';

const HomeHeaderComponent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: normalize(16),
        marginBottom: normalize(16),
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
        <TouchableOpacity onPress={() => navigate(routNames.NOTIFICATIONS)}>
          <Icon name={ICON_NAMES.NOTIFICATION} />
        </TouchableOpacity>
        {/*<View style={{ marginLeft: normalize(8) }}>*/}
        {/*  <Icon name={ICON_NAMES.MESSAGE} />*/}
        {/*</View>*/}
      </View>
    </View>
  );
};

export default HomeHeaderComponent;
