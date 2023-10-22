import React, { Fragment } from 'react';
import Navigation from '../navigation';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import Modal from 'components/Modal';

function Main() {
  const { visible: modalVisible } = useSelector(({ modal }) => modal);
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
