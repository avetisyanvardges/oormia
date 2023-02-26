import React, {useState, useEffect} from 'react';
import { CustomText } from 'components/Text';

const getPadTime = time => time.toString().padStart(2, 0);

function Index({timerText = '', timerStyle, duration = 120}) {
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
    <CustomText values={`${timerText} ${minutes}:${seconds}`} globalStyle={timerStyle} />
  );
}

export default Index;
