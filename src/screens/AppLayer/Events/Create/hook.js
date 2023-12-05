import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import { ChooseCategories } from 'screens/AppLayer/Events/Create/components/ChooseCategories';
import Create from 'screens/AppLayer/Events/Create/components/Create';
import dispatch from 'utils/dispatch/dispatch';
import { getEventById } from 'state/events/operations/getEventById';
import { ChooseSpeaker } from './components/ChooseSpeaker';
import SendRequest from './components/SendRequest';

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
    create: (
      <Create
        categories={selectedCategories}
        setCategories={setSelectedCategories}
        setScreen={setScreen}
        region={route?.params?.region}
        params={route?.params}
      />
    ),
    update: (
      <Create screen={screen} setScreen={setScreen} params={route?.params} />
    ),
  };

  useEffect(() => {
    if (route?.params?.screen) {
      if (route?.params.screen === 'update') {
        dispatch(getEventById({ id: route?.params?.id }));
      }

      setScreen(route.params.screen);
    }
  }, [route]);

  return { insets, screens, screen, setScreen };
}

export default useContainer;
