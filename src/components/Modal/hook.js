import React from 'react';
import {useWindowDimensions} from 'react-native';
import {useSelector} from 'react-redux';
import CreateTicket from 'components/Modal/components/CreateTicket';

function useContainer() {
  const {type, visible} = useSelector(({modal}) => modal);
  const {width, height} = useWindowDimensions();
  const componentTypes = {
    create_ticket: <CreateTicket />,
  };

  return {type, visible, componentTypes, width, height};
}

export default useContainer;
