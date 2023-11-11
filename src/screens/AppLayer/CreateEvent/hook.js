import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import { ChooseCategories } from 'screens/AppLayer/CreateEvent/components/ChooseCategories';
import Create from 'screens/AppLayer/CreateEvent/components/Create';
import CreateGroup from 'screens/AppLayer/CreateGroup';
import { ChooseSpeaker } from 'screens/AppLayer/Create/components/ChooseSpeaker';
import SendRequest from 'screens/AppLayer/Create/components/SendRequest';
import AddEvent from 'screens/AppLayer/Create/components/AddEvent';

function useContainer({ route }) {
  const insets = useSafeAreaInsets();
  const [screen, setScreen] = useState('choose_category');
  const [selectedCategories, setSelectedCategories] = useState('');
  const [speaker, setSpeaker] = useState('');

  const screens = {
    choose_category: (
      <ChooseCategories
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        setScreen={setScreen}
      />
    ),
    choose_a_speaker: (
      <ChooseSpeaker
        speaker={speaker}
        setSpeaker={setSpeaker}
        setScreen={setScreen}
      />
    ),
    send_request: (
      <SendRequest
        speaker={speaker}
        setSpeaker={setSpeaker}
        setScreen={setScreen}
      />
    ),
    // add_event: (
    //   <AddEvent
    //     categories={categories}
    //     setCategories={setCategories}
    //     setScreen={setScreen}
    //   />
    // ),
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
