import React from 'react';
import { View } from 'react-native';
import { Colors } from 'assets/RootStyles';
import useContainer from './hook';
import { normalize } from 'assets/RootStyles/normalize';

const RadioButton = props => {
  const { styles, size, active_size, active } = useContainer(props);
  return (
    <View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        styles.btn_container,
        {
          borderWidth: active ? normalize(6) : 1.5,
          borderColor: active
            ? Colors.purple['500']
            : Colors.oxford_blue['100'],
        },
      ]}
    />
  );
};

export { RadioButton };
