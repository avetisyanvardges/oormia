import React, { Fragment, useEffect } from 'react';
import Navigation from '../navigation';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import Modal from 'components/Modal';
import { fetchCurrentUser } from 'state/user/operations/fetchCurrentUser';
import dispatch from 'utils/dispatch/dispatch';
import Socket from 'services/Socket';

function Main() {
  const { visible: modalVisible } = useSelector(({ modal }) => modal);
  const { token } = useSelector(({ user }) => user);
  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser());
      Socket.start(token);
    }
  }, []);
  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      {modalVisible && <Modal />}
      <Navigation />
    </Fragment>
  );
}

export default Main;
