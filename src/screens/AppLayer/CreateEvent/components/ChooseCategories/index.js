import React, { useEffect } from 'react';
import { FlatList, useWindowDimensions, View } from 'react-native';
import { normalize } from 'assets/RootStyles/normalize';
import Button from 'components/Button';
import { Colors } from 'assets/RootStyles';
import useContainer from './hook';
import Header from 'components/Header';
import { back } from 'services/NavigationService';
import dispatch from 'utils/dispatch/dispatch';
import { fetchCategoriesAll } from 'state/categories/operations/fetchCategoriesAll';
import { useSelector } from 'react-redux';

const ChooseCategories = ({
  selectedCategories,
  setSelectedCategories,
  setScreen,
}) => {
  const { renderCategories, insets } = useContainer();
  const { width } = useWindowDimensions();
  const { categories } = useSelector(({ categories }) => categories);

  const selectCategories = () => {
    console.log(selectedCategories);
    setScreen('create');
  };

  useEffect(() => {
    dispatch(fetchCategoriesAll());
  }, []);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top ? insets.top : normalize(16),
        paddingHorizontal: normalize(16),
      }}>
      <FlatList
        numColumns="2"
        data={categories}
        renderItem={({ item }) =>
          renderCategories(item, selectedCategories, setSelectedCategories)
        }
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        contentContainerStyle={{
          marginTop: normalize(18),
          alignItems: 'center',
          paddingBottom: normalize(40),
        }}
        showsVerticalScrollIndicator={false}
      />
      <View
        style={{
          paddingBottom: normalize(16),
        }}>
        <Button
          title={'Next'}
          textStyle={{ color: Colors.white }}
          onPress={selectCategories}
          disabled={!selectedCategories}
        />
      </View>
    </View>
  );
};

export { ChooseCategories };
