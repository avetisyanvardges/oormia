import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors } from 'assets/RootStyles';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';

function CreateButton(props) {
  const { theme, buttonColor, styles } = props;
  const [pressed, setPressed] = useState(false);
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigate(routNames.CREATE_EVENT)}>
        <View
          style={[
            styles.middleIcon,
            {
              backgroundColor: Colors.oxford_blue['500'],
              shadowColor: Colors.black,
              shadowOffset: { width: 2, height: 2 },
              elevation: 8,
            },
          ]}>
          <View style={{ transform: [{ rotate: '315deg' }] }}>
            <Icon
              name={ICON_NAMES.TAB_BAR.CREATE}
              width={normalize(25)}
              height={normalize(25)}
              color={theme?.PRIMARY_BACKGROUND_COLOR}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CreateButton;
