import React, { useMemo, useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { CustomText } from 'components/Text';
import { Colors, FontStyle, Shadow } from 'assets/RootStyles';
import images from 'assets/images';
import MasonryList from '@react-native-seoul/masonry-list';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';
import { navigate } from 'services/NavigationService';
import { routNames } from 'constants/routNames';

const tabTypes = {
  EVENTS: 'events',
  TRIPS: 'trips',
  GROUP: 'groups',
};

const groups = [
  {
    title: 'Army friends',
    image: images.preferences.ecotourism,
    members: 7,
  },
  {
    title: 'IT Colleagues',
    image: images.preferences.it,
    members: 15,
  },
  {
    title: 'Friends',
    image: images.preferences.art,
    members: 10,
  },
];

const HistorySection = () => {
  const [activeTab, setActiveTab] = useState(tabTypes.EVENTS);

  const RenderCard = ({ item, i }) => {
    const randomBool = useMemo(() => Math.random() < 0.5, [i]);

    return (
      <View
        style={{
          flex: 1,
          marginHorizontal: i % 3 === 1 ? normalize(10) : 0,
          marginTop: normalize(10),
        }}>
        <Image
          source={images.preferences[item]}
          style={{
            width: '99%',
            height: randomBool ? normalize(80) : normalize(170),
            alignSelf: 'stretch',
            borderRadius: normalize(10),
          }}
          resizeMode="cover"
        />
      </View>
    );
  };

  const renderGroups = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          padding: normalize(10),
          backgroundColor: Colors.white,
          borderRadius: normalize(12),
          ...Shadow,
        }}>
        <Image
          source={item.image}
          style={{
            width: normalize(60),
            height: normalize(60),
            borderRadius: normalize(12),
          }}
        />
        <View>
          <CustomText
            children={item.title}
            globalStyle={{
              ...FontStyle.text_h5.medium,
              marginLeft: normalize(12),
            }}
          />
          <CustomText
            children={`Members: ${item.members}`}
            globalStyle={{
              ...FontStyle.text_h6.regular,
              marginTop: normalize(16),
              marginLeft: normalize(12),
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, marginTop: normalize(16) }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: normalize(16),
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setActiveTab(tabTypes.EVENTS)}
          style={{
            flex: 1,
            alignItems: 'center',
            paddingVertical: normalize(10),
            borderBottomWidth: 1.5,
            borderColor:
              activeTab === tabTypes.EVENTS
                ? Colors.oxford_blue['500']
                : Colors.white,
          }}>
          <CustomText
            globalStyle={{
              ...FontStyle.text_h5.regular,
              color:
                activeTab === tabTypes.EVENTS
                  ? Colors.oxford_blue['500']
                  : Colors.oxford_blue['100'],
            }}
            children={'Events'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setActiveTab(tabTypes.TRIPS)}
          style={{
            flex: 1,
            alignItems: 'center',
            paddingVertical: normalize(10),
            borderBottomWidth: 1.5,
            borderColor:
              activeTab === tabTypes.TRIPS
                ? Colors.oxford_blue['500']
                : Colors.white,
          }}>
          <CustomText
            globalStyle={{
              ...FontStyle.text_h5.regular,
              color:
                activeTab === tabTypes.TRIPS
                  ? Colors.oxford_blue['500']
                  : Colors.oxford_blue['100'],
            }}
            children={'Trips'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setActiveTab(tabTypes.GROUP)}
          style={{
            flex: 1,
            alignItems: 'center',
            paddingVertical: normalize(10),
            borderBottomWidth: 1.5,
            borderColor:
              activeTab === tabTypes.GROUP
                ? Colors.oxford_blue['500']
                : Colors.white,
          }}>
          <CustomText
            globalStyle={{
              ...FontStyle.text_h5.regular,
              color:
                activeTab === tabTypes.GROUP
                  ? Colors.oxford_blue['500']
                  : Colors.oxford_blue['100'],
            }}
            children={'Groups'}
          />
        </TouchableOpacity>
      </View>
      {activeTab !== tabTypes.GROUP ? (
        <MasonryList
          data={Object.keys(images.preferences)}
          keyExtractor={item => item.id}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => <RenderCard item={item} i={i} />}
          contentContainerStyle={{
            paddingBottom: normalize(120),
            paddingHorizontal: normalize(16),
          }}
          // refreshing={isLoadingNext}
          // onRefresh={() => refetch({first: ITEM_CNT})}
          // onEndReachedThreshold={0.1}
          // onEndReached={() => loadNext(ITEM_CNT)}
        />
      ) : (
        <View style={{ flex: 1 }}>
          <FlatList
            data={groups}
            renderItem={renderGroups}
            ListHeaderComponent={() => {
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    padding: normalize(10),
                    backgroundColor: Colors.white,
                    borderRadius: normalize(12),
                    marginBottom: normalize(16),
                    ...Shadow,
                  }}
                  onPress={() => navigate(routNames.CREATE_GROUP)}>
                  <View
                    style={{
                      width: normalize(60),
                      height: normalize(60),
                      borderRadius: normalize(12),
                      borderWidth: 1,
                      borderColor: Colors.oxford_blue['500'],
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon
                      name={ICON_NAMES.GALLERY_ADD}
                      color={Colors.oxford_blue['500']}
                    />
                  </View>
                  <CustomText
                    children={'Create new group'}
                    globalStyle={{
                      ...FontStyle.text_h5.medium,
                      marginLeft: normalize(12),
                    }}
                  />
                </TouchableOpacity>
              );
            }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: normalize(16),
              paddingTop: normalize(16),
              paddingBottom: normalize(120),
            }}
            ItemSeparatorComponent={() => (
              <View style={{ height: normalize(8) }} />
            )}
          />
        </View>
      )}
    </View>
  );
};

export default HistorySection;
