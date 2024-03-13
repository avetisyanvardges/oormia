import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CustomText } from 'components/Text';
import BtnGoBack from 'components/BtnGoBack';
import { Colors } from 'assets/RootStyles';
import { normalize } from 'assets/RootStyles/normalize';
import { MoreIcon } from 'components/Svgs/More';
import MoreOptionsIcon from 'components/Svgs/MoreOptions';
import PhoneIcon from 'components/Svgs/PhoneIcon';
import MImage from 'components/MImage';
import NotificationStatusIcon from 'components/Svgs/NotificationStatus';
import Input from 'components/Input';

function GroupChatScreen({ route }) {
  const item = route.params.item;
  console.log('ITEMMMM', item);
  const insets = useSafeAreaInsets();
  const styles = Styles({ insets });
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_content}>
          <BtnGoBack color={Colors.white} />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MImage
              source={{
                uri: item?.pictures?.[0]?.fileDownloadUri?.replace(
                  ':8085',
                  ':8086',
                ),
              }}
              style={{
                width: normalize(50),
                height: normalize(50),
                borderRadius: normalize(25),
                marginHorizontal: normalize(10),
              }}
            />
            <View>
              <CustomText
                children={`${item?.groupName}`}
                globalStyle={styles.title}
              />
              <CustomText
                children={'members'}
                globalStyle={styles.members}
                values={{ count: item?.userId?.length }}
              />
            </View>
          </View>
          <TouchableOpacity
            style={{ position: 'absolute', right: normalize(90) }}>
            <NotificationStatusIcon
              width={normalize(24)}
              height={normalize(24)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: 'absolute', right: normalize(45) }}>
            <PhoneIcon width={normalize(24)} height={normalize(24)} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: normalize(10),
              transform: [{ rotate: '90deg' }],
            }}>
            <MoreIcon backgroundColor={Colors.white} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ position: 'absolute', bottom: 0 }}>
        <Input
          placeholder={'message'}
          onChangeText={t => setText(t)}
          value={text}
        />
      </View>
    </View>
  );
}

export default GroupChatScreen;
