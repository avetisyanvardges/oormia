import React, { Fragment, useEffect, useRef } from 'react';
import Navigation from '../navigation';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import Modal from 'components/Modal';
import { fetchCurrentUser } from 'state/user/operations/fetchCurrentUser';
import dispatch from 'utils/dispatch/dispatch';
import Socket from 'services/Socket';
import Toast from 'components/Toast';
import { hide_toast } from 'state/snackbars';

function Main() {
  const toastRef = useRef(null);
  const { visible: modalVisible } = useSelector(({ modal }) => modal);
  const {
    visible: toastVisible,
    message,
    type,
    duration,
  } = useSelector(({ toast }) => toast);
  const { token } = useSelector(({ user }) => user);

  useEffect(() => {
    console.log(toastVisible, 'toastVisible');
    if (toastVisible) {
      toastRef.current?.hide(() => {
        toastRef.current?.show(message, type, duration);
      });
    } else {
      toastRef.current?.hide();
    }
  }, [toastVisible]);

  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser());
      Socket.start(token);
    }
  }, []);

  const toastHidden = () => {
    dispatch(hide_toast({}));
  };

  return (
    <Fragment>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={'transparent'}
      />
      {modalVisible && <Modal />}
      <Navigation />
      <Toast ref={toastRef} onHide={toastHidden} />
    </Fragment>
  );
}

export default Main;
