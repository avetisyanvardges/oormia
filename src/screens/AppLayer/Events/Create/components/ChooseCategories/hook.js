import LinearGradient from 'react-native-linear-gradient';
import { ImageBackground, Pressable, View } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import { Colors, fullScreen } from 'assets/RootStyles';
import CheckBox from '@react-native-community/checkbox';
import { CustomText } from 'components/Text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';

function useContainer() {
  const insets = useSafeAreaInsets();
  const renderCategories = (item, categories, setCategories) => {
    console.log(categories, setCategories);
    const selected = categories.id === item.id;
    console.log(item);
    return (
      <Pressable
        onPress={() => setCategories(item)}
        style={{ marginHorizontal: normalize(10) }}>
        <FastImage
          source={{ uri: item?.picture?.fileDownloadUri }}
          resizeMode="cover"
          style={{
            width: (fullScreen.width - normalize(52)) / 2,
            height: normalize(170),
            borderRadius: normalize(10),
            overflow: 'hidden',
          }}>
          <View style={{ alignItems: 'flex-end', padding: normalize(10) }}>
            <CheckBox
              disabled={false}
              value={selected}
              onValueChange={() => setCategories(item)}
              tintColor={Colors.white}
              onFillColor={Colors.purple['500']}
              onTintColor={Colors.purple['500']}
              tintColors={{
                true: Colors.purple['500'],
                false: Colors.purple['500'],
              }}
              boxType={'circle'}
              onCheckColor={Colors.white}
              onAnimationType={'one-stroke'}
              offAnimationType={'one-stroke'}
              style={{ borderRadius: normalize(5) }}
            />
          </View>
          <LinearGradient
            start={{ x: 1, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.5, 0.95]}
            colors={['rgba(0,0,0,.0)', Colors.grey['500']]}
            style={{
              flex: 1,
              height: normalize(70),
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}>
            <CustomText
              children={item.name}
              globalStyle={{ color: Colors.white, padding: normalize(10) }}
            />
          </LinearGradient>
        </FastImage>
      </Pressable>
    );
  };

  return { renderCategories, insets };
}

export default useContainer;
