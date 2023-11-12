import React, { Fragment, useEffect } from 'react';
import Navigation from '../navigation';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import Modal from 'components/Modal';
import { isEmpty } from 'lodash';
import { fetchCurrentUser } from 'state/user/operations/fetchCurrentUser';
import dispatch from 'utils/dispatch/dispatch';

function Main() {
  const { visible: modalVisible } = useSelector(({ modal }) => modal);
  const { token } = useSelector(({ user }) => user);
  console.log(token);
  useEffect(() => {
    if (!isEmpty(token)) {
      dispatch(fetchCurrentUser());
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
