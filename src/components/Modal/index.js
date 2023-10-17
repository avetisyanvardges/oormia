import React from 'react';
import {Modal, TouchableWithoutFeedback, View} from 'react-native';
import useContainer from './hook';
import {normalize} from 'assets/RootStyles/normalize';
import {Colors} from 'assets/RootStyles';
import {hideModal} from 'state/modal';
import {useDispatch} from 'react-redux';

const CustomModal = () => {
  const {type, visible, componentTypes, width, height} = useContainer();
  const dispatch = useDispatch();
  console.log(type, 'TYPE');
  return (
    <Modal
      statusBarTranslucent
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={() => {
        dispatch(hideModal());
      }}>
      <TouchableWithoutFeedback
        disabled={type === 'force_update'}
        onPress={() => dispatch(hideModal())}>
        <View
          style={{
            width,
            height: '100%',
            position: 'absolute',
            top: 0,
            backgroundColor: 'rgba(77,77,77,.4)',
            zIndex: 999,
            justifyContent: 'center',
            paddingBottom: normalize(32),
          }}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View
              style={{
                minWidth: normalize(340 - 32),
                minHeight: normalize(150),
                marginHorizontal: normalize(16),
                borderRadius: normalize(24),
                backgroundColor: Colors.white,
              }}>
              <View
                style={{
                  padding: normalize(16),
                  paddingTop: normalize(12),
                }}>
                {componentTypes[type]}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomModal;
