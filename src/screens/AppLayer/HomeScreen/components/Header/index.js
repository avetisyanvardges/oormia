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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: normalize(16),
        marginBottom: normalize(16),
      }}>
      <CustomText
        children={'find_nearby_event'}
        ellipsizeMode={'tail'}
        numberOfLines={1}
        globalStyle={{
          flex: 1,
          ...FontStyle.text_h3.medium,
        }}
      />
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
