import { useState, useRef, useEffect } from "react";
import Alarm from "../sounds/Alarm.mp3";
import { CANT_LINES, MAX_TIME, MIN_TIME } from "../config/pomoclock";



export function usePomodoroSetting() {

  const [time, setTime] = useState(MIN_TIME);
  const [startTime, setStartTime] = useState(MIN_TIME);
  const intervalRef = useRef<number | null>(null);
  const [inSesion, setInSesion] = useState(false);
  const [pause, setPause] = useState(false);

    const timeDiff = (startTime / CANT_LINES) * 60 * 1000;
    const intervalClockHands = useRef<number | null>(null);
    const [handsClockIndex, setHandsClockIndex] = useState(0);

  
    useEffect(() => {
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (intervalClockHands.current) clearInterval(intervalClockHands.current);
      };
    }, []);

  const reproducirAlarma = () => {
    const audio = new Audio(Alarm); // Usa el archivo importado
    audio.play();
  };
    

  const startTimer = () => {
    if (intervalRef.current) return;
    if (time <= 0) return;

    setStartTime(time);
    setInSesion(true);
    countDown();

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          reproducirAlarma();
          clearInterval(intervalRef.current);
          clearInterval(intervalClockHands.current);
          intervalRef.current = null;
          setInSesion(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 60000);
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

   const countDown = () => {
      if (intervalClockHands.current) return;
  
      intervalClockHands.current = setInterval(() => {
        console.log(handsClockIndex);
        setHandsClockIndex((prevIndex) => prevIndex + 1);
      }, timeDiff);
    };

  const modifyTime = (operator: string) => {
    if (intervalRef.current) return;

    if (time < MAX_TIME && operator === "+") {
      setTime(time + 5);
    } else if (time > MIN_TIME && operator === "-") {
      setTime(time - 5);
    }
  };

  

    return {
       startTimer,
       stopTimer,
       modifyTime,
       setPause,
       setInSesion,
       startTime,
       handsClockIndex,
       time,
       inSesion,
       pause
    };
}