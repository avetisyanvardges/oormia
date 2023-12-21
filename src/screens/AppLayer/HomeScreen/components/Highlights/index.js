import React, { useCallback } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, FontStyle } from 'assets/RootStyles';
import Underline from 'components/Underline';
import images from 'assets/images';

const Highlights = () => {
  const renderHighlightItem = useCallback((item, index) => {
    return (
      <View>
        <View
          style={{
            width: normalize(70),
            height: normalize(70),
            borderRadius: normalize(40),
            borderWidth: 4,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: Colors.purple['500'],
          }}>
          <Image
            source={images[`profile_${index}`] || images.profile_1}
            style={{
              width: normalize(66),
              height: normalize(66),
              borderRadius: normalize(40),
            }}
            resizeMode={'center'}
          />
        </View>
      </View>
    );
  }, []);
  return (
    <View>
      <View
        style={{
          marginHorizontal: normalize(16),
          marginBottom: normalize(10),
        }}>
        <Text style={{ ...FontStyle.text_h4.regular }}>
          Our Community's Best
        </Text>
      </View>
      <FlatList
        horizontal
        data={[{}, {}, {}, {}, {}, {}, {}, {}]}
        renderItem={renderHighlightItem}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: normalize(8) }} />}
        contentContainerStyle={{ paddingHorizontal: normalize(16) }}
      />
      <View
        style={{
          marginHorizontal: normalize(16),
          marginVertical: normalize(16),
        }}>
        <Underline height={normalize(1.5)} />
      </View>
    </View>
  );
};

export default Highlights;
