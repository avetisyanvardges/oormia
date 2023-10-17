import React from 'react';
import {FlatList, useWindowDimensions, View} from 'react-native';
import {normalize} from 'assets/RootStyles/normalize';
import images from 'assets/images';
import Button from 'components/Button';
import {Colors} from 'assets/RootStyles';
import useContainer from './hook';

const ChooseCategories = ({categories, setCategories, setScreen}) => {
  const {renderCategories, insets} = useContainer();
  const {width} = useWindowDimensions();

  const selectCategories = () => {
    setScreen('create');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <FlatList
        numColumns="2"
        data={Object.keys(images.categories)}
        renderItem={({item}) =>
          renderCategories(item, categories, setCategories)
        }
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        contentContainerStyle={{
          marginTop: normalize(18),
        }}
        ListFooterComponent={() => (
          <View
            style={{
              flex: 1,
              marginVertical: normalize(20),
              marginBottom: normalize(10),
              paddingBottom: normalize(10),
              alignItems: 'center',
            }}>
            <Button
              title={'Next'}
              textStyle={{color: Colors.white}}
              onPress={selectCategories}
              disabled={!categories}
            />
          </View>
        )}
      />
    </View>
  );
};

export {ChooseCategories};
