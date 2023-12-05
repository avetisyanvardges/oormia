import React from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import images from 'assets/images';
import { Colors, FontStyle, Shadow } from 'assets/RootStyles';
import { CustomText } from 'components/Text';
import Underline from 'components/Underline';
import SelectIcon from 'components/Svgs/Select';

const usersData = [
  {
    id: 1,
    name: 'Olivia Turner',
    position: 'Financial Analyst',
    about:
      'Detail-oriented finance professional with expertise in financial modeling and analysis.',
    phoneNumber: '+1 (555) 123-4567',
    email: 'olivia.turner@email.com',
  },
  {
    id: 2,
    name: 'Marcus Harris',
    position: 'Human Resources Manager',
    about:
      'HR specialist fostering a positive workplace culture and implementing talent development programs.',
    phoneNumber: '+1 (555) 234-5678',
    email: 'marcus.harris@email.com',
  },
  {
    id: 3,
    name: 'Elena Martinez',
    position: 'Marketing Coordinator',
    about:
      'Creative marketer with a passion for developing and executing engaging marketing campaigns.',
    phoneNumber: '+1 (555) 345-6789',
    email: 'elena.martinez@email.com',
  },
  {
    id: 4,
    name: 'Andre Robinson',
    position: 'Operations Manager',
    about:
      'Results-driven operations expert optimizing processes and ensuring efficient workflow.',
    phoneNumber: '+1 (555) 456-7890',
    email: 'andre.robinson@email.com',
  },
  {
    id: 5,
    name: 'Sophia Nguyen',
    position: 'Sales Representative',
    about:
      'Dynamic sales professional skilled in building strong client relationships and exceeding sales targets.',
    phoneNumber: '+1 (555) 567-8901',
    email: 'sophia.nguyen@email.com',
  },
];

const ChooseSpeaker = ({ setScreen, speaker, setSpeaker }) => {
  const renderSpeakerItem = ({ item }) => {
    const [imageName] = item.name.split(' ');
    return (
      <TouchableOpacity
        onPress={() => {
          setSpeaker(item);
          setScreen('send_request');
        }}
        style={{
          flexDirection: 'row',
          height: normalize(116),
          borderRadius: normalize(10),
          backgroundColor: Colors.white,
          alignItems: 'center',
          ...Shadow,
        }}>
        <Image
          source={images.speakers[imageName.toLowerCase()]}
          resizeMode="cover"
          style={{
            width: normalize(88),
            height: normalize(116),
            borderTopLeftRadius: normalize(10),
            borderBottomLeftRadius: normalize(10),
            overflow: 'hidden',
          }}
        />
        <View style={{ flex: 1, marginLeft: normalize(15) }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View>
              <CustomText
                children={item.name}
                globalStyle={{
                  ...FontStyle.text_h5.medium,
                  marginTop: normalize(3),
                }}
              />
              <CustomText
                children={item.position}
                globalStyle={{
                  ...FontStyle.text_h6.medium,
                  color: Colors.oxford_blue['200'],
                }}
              />
            </View>

            <View style={{ position: 'absolute', right: normalize(15) }}>
              <SelectIcon
                width={normalize(24)}
                height={normalize(24)}
                color={Colors.purple['500']}
              />
            </View>
          </View>
          <Underline
            height={normalize(1.5)}
            style={{ marginVertical: normalize(2) }}
          />
          <CustomText
            children={item.about}
            ellipsizeMode={'tail'}
            numberOfLines={2}
            globalStyle={{
              ...FontStyle.text_h6.regular,
              marginTop: normalize(2),
            }}
          />
          <CustomText
            children={item.phoneNumber}
            globalStyle={{
              ...FontStyle.text_h6.regular,
              color: Colors.oxford_blue['200'],
              marginTop: normalize(4),
            }}
          />
          <CustomText
            children={item.email}
            globalStyle={{
              ...FontStyle.text_h6.regular,
              color: Colors.oxford_blue['200'],
              marginTop: normalize(4),
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        backgroundColor: Colors.grey['50'],
        paddingBottom: normalize(50),
      }}>
      <FlatList
        data={usersData}
        renderItem={renderSpeakerItem}
        ItemSeparatorComponent={() => (
          <View style={{ height: normalize(16) }} />
        )}
        contentContainerStyle={{
          marginHorizontal: normalize(16),
          paddingBottom: normalize(100),
        }}
      />
    </View>
  );
};

export { ChooseSpeaker };
