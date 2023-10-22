import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import { ChooseCategories } from 'screens/AppLayer/CreateEvent/components/ChooseCategories';
import Create from 'screens/AppLayer/CreateEvent/components/Create';

function useContainer({ route }) {
  const insets = useSafeAreaInsets();
  const [screen, setScreen] = useState('choose_category');
  const [selectedCategories, setSelectedCategories] = useState('');

  const screens = {
    choose_category: (
      <ChooseCategories
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        setScreen={setScreen}
      />
    ),
    create: (
      <Create
        categories={selectedCategories}
        setCategories={setSelectedCategories}
        setScreen={setScreen}
        region={route?.params?.region}
      />
    ),
  };

  useEffect(() => {
    if (route?.params?.screen) {
      setScreen(route.params.screen);
    }
  }, [route]);

  return { insets, screens, screen, setScreen };
}

export default useContainer;
