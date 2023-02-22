import React,{useState, useEffect} from "react";
import { getPadTime } from "./getPadTime";


import Text from "../text";




function Index({timerText="", timerStyle}){

    const [time, setTime]= useState(2 *60)


    const minutes = getPadTime(Math.floor(time / 60));
    const seconds = getPadTime((time - minutes * 60));
    let interval
    useEffect(()=>{
      interval = setInterval(() => {
            setTime((time)=> (time >= 1 ? time - 1:  null))
        },1000);
    
        if(time <=0){
            return ()=>  clearInterval(interval)
          }
        
    },[])


    return (
        <Text text={`${timerText} ${minutes}:${seconds}`} style={timerStyle}/>
    )

}

export default Index