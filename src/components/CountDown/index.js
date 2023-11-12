import React from 'react';
import { View, Text } from 'react-native';

function CountDownTimer(props) {
  const [time, setTime] = React.useState(props.initialValue || 60);
  const timerRef = React.useRef(time);
  React.useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <View style={{ justifyContent: 'center' }}>
      <Text> {time} </Text>
    </View>
  );
}

export default CountDownTimer;
