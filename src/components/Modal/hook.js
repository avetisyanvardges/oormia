import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useSelector } from 'react-redux';
import CreateTicket from 'components/Modal/components/CreateTicket';
import DeleteAccount from 'components/Modal/components/DeleteAccount';
import EventCreated from 'components/Modal/components/EventCreated';

function useContainer() {
  const { type, visible } = useSelector(({ modal }) => modal);
  const { width, height } = useWindowDimensions();
  const componentTypes = {
    create_ticket: <CreateTicket />,
    delete_account: <DeleteAccount />,
    event_created: <EventCreated />,
  };

  return { type, visible, componentTypes, width, height };
}

export default useContainer;
