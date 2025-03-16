import { useState, useRef, useEffect, } from "react";
import Alarm from "../sounds/Alarm.mp3";
import { CANT_LINES, MAX_TIME, MIN_TIME } from "../config/pomoclock";
import { useSettingContext } from "./useSettingContext";

export function usePomodoroSetting() {
  const {preferenceFocusTime} = useSettingContext();
  const [time, setTime] = useState(preferenceFocusTime);
  const [startTime, setStartTime] = useState(MIN_TIME);
  const [inSesion, setInSesion] = useState(false);
  const [pause, setPause] = useState(false);
  const [handsClockIndex, setHandsClockIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const intervalClockHands = useRef<number | null>(null);
  

  useEffect(() => { 
    if (!inSesion) {
      console.log(time, "time");
      setStartTime(time); 
    }
  }, [inSesion, time]); 
  
  
  useEffect(() => {
    if (inSesion) {
      console.log("Entrando a la sesión", startTime); 
      countDown(startTime); 
    } else {
      console.log("Saliendo de la sesión"); 
      setHandsClockIndex(0); 
    }
  }, [inSesion]);


  useEffect(() => {
    setTime(preferenceFocusTime);
  }, [preferenceFocusTime]);

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

    setInSesion(true);


    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          reproducirAlarma();
          clearInterval(intervalRef.current);
          clearInterval(intervalClockHands.current);
          setTime(startTime)
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

  const countDown = (currentTime : number) => {
    if (intervalClockHands.current) {
      clearInterval(intervalClockHands.current); 
    }
    const timeDiffLines = ((currentTime / CANT_LINES) * 60 * 1000);
    console.log("tiempo de diferrencia entre lineas", timeDiffLines)

    intervalClockHands.current = setInterval(() => {
      console.log("index reloj",handsClockIndex);
      setHandsClockIndex((prevIndex) => prevIndex + 1);
    }, timeDiffLines);
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
    setTime,
    startTime,
    handsClockIndex,
    time,
    inSesion,
    pause,
  };
}
