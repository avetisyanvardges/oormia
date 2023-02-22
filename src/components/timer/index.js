import React, {useState, useEffect} from "react";
import Text from "../text";

const getPadTime = (time) => time.toString().padStart(2, 0);

function Index({timerText = "", timerStyle, duration = 120}) {

    const [time, setTime] = useState(duration);

    let interval
    const minutes = getPadTime(Math.floor(time / 60));
    const seconds = getPadTime((time - minutes * 60));

    useEffect(() => {
        interval = setInterval(() => {
            setTime((time) => (time >= 1 ? time - 1 : null))
        }, 1000);

        if (time <= 0) {
            return () => clearInterval(interval)
        }
    }, [])

    return (
        <Text text={`${timerText} ${minutes}:${seconds}`} style={timerStyle}/>
    )

}

export default Index
