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
import useMount from 'hooks/useMount';
import messaging from '@react-native-firebase/messaging';
import { sendFcm } from 'state/user/operations/sendFcm';

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

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      messaging()
        .getToken()
        .then(fcmToken => {
          console.log(fcmToken, 'FCMTOKEN');
          if (token) {
            dispatch(sendFcm({ params: { token: fcmToken } }));
          }
        });
      console.log('Authorization status:', authStatus);
    }
  }

  const onMountHandler = async () => {
    requestUserPermission();
  };

  useMount(onMountHandler);

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
