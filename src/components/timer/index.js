import React, {useState, useEffect} from 'react';
import { CustomText } from 'components/Text';
import {View} from "react-native";
import {styles} from "components/timer/styles";

const getPadTime = time => time.toString().padStart(2, 0);

function Index({duration = 120}) {
  const [time, setTime] = useState(duration);

  let interval;
  const minutes = getPadTime(Math.floor(time / 60));
  const seconds = getPadTime(time - minutes * 60);

  useEffect(() => {
    interval = setInterval(() => {
      setTime(time => (time >= 1 ? time - 1 : null));
    }, 1000);

    if (time <= 0) {
      return () => clearInterval(interval);
    }
  }, []);

  return (
      <View style={styles.body}>
        <CustomText values={'Send me code again'} globalStyle={styles.timeText}/>
        <CustomText values={`${minutes}:${seconds}`} globalStyle={styles.time} />
      </View>
  );
}

export default Index;
