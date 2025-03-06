import { useState, useRef } from "react";

const MAX_TIME: number = 240;
const MIN_TIME: number = 0;

export function usePomodoroSetting() {

  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const [inSesion, setInSesion] = useState(false);
  const [pause, setPause] = useState(false);

  const startTimer = () => {
    if (intervalRef.current) return;
    if (time <= 0) return;

    setStartTime(time);
    setInSesion(true);

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current);
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
       time,
       inSesion,
       pause
    };
}