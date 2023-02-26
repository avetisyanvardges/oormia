import React, {useState} from 'react';
import {View} from 'react-native';
import {CustomText} from 'components/Text';
import {styles} from './style';
import Timer from 'components/timer';
import CodeVerificationNumber from './CodeVerificationNumber';
import ScreenMask from 'components/screenMask';
import Icon from 'components/Svgs';
import { ICON_NAMES } from 'components/Svgs/icon_names';


function CodeVerification() {
  const [pin, setPin] = useState([]);

  const onClick = text => {
    if (pin.length < 4) {
      setPin(pin => [...pin, text]);
    }
  };

  const onDelete = () => {
    const pinLength = pin.length - 1;

    if (!(pinLength < 0)) {
      pin.splice(pinLength, 1);
      setPin([...pin]);
    }
  };

  return (
    <ScreenMask>
      <View style={styles.containerText}>
        <CustomText values="Code Verification" globalStyle={styles.textCodV} />
        <CustomText values="Enter verification code here" globalStyle={styles.textEnterV} />
      </View>
      <View style={styles.containerItem}>
        {Array.from({length: 4}).map((el, i) => {
          return (
            <View style={styles.item} key={i}>
              <CustomText values={pin[i]} globalStyle={styles.numberTextStyle} />
            </View>
          );
        })}
      </View>
      <Timer timerText="Send me code again" timerStyle={styles.timer} />
      <View style={styles.keyboardContainer}>
        {Array.from({length: 9}).map((el, i) => {
          return (
            <CodeVerificationNumber
              key={i}
              numberContainerStyle={styles.numberContainer}
              numberText={i + 1}
              numberTextStyle={styles.numberTextStyle}
              onClick={onClick}
            />
          );
        })}
      </View>
      <View style={styles.arrowContainer}>
        <CodeVerificationNumber
          numberContainerStyle={styles.numberContainer}
          numberText={0}
          onClick={onClick}
          numberTextStyle={styles.numberTextStyle}
        />
        <Icon name={ICON_NAMES.ASSETS_SVG.ARROW_LEFT} onPress={onDelete} style={styles.numberContainer} width={9} height={13}/>
{/*=======*/}
{/*        <CodeVerificationNumber*/}
{/*          numberText={<ArrowRight />}*/}
{/*          onClick={onDelete}*/}
{/*          numberTextStyle={styles.arrowStyle}*/}
{/*        />*/}
{/*>>>>>>> main*/}
      </View>
    </ScreenMask>
  );
}

export default CodeVerification;
