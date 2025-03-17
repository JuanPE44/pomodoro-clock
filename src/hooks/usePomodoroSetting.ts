import { useState, useRef, useEffect } from "react";
import Alarm from "../sounds/Alarm.mp3";
import { CANT_LINES, MAX_TIME, MIN_TIME } from "../config/pomoclock";
import { useSettingContext } from "./useSettingContext";

export function usePomodoroSetting() {
  const { preferenceFocusTime } = useSettingContext();
  const [time, setTime] = useState(preferenceFocusTime);
  const [startTime, setStartTime] = useState(MIN_TIME);
  const [inSesion, setInSesion] = useState(false);
  const [inBreak, setInBreak] = useState(false);
  const [pause, setPause] = useState(false);
  const [breakTime, setBreakTime] = useState(1);
  const [withPause, setWithPause] = useState(false);
  const [handsClockIndex, setHandsClockIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const intervalClockHands = useRef<number | null>(null);
  const intervalBreak = useRef<number | null>(null);

  useEffect(() => {
    if (!inSesion) {
      console.log(time, "time");
      setStartTime(time);
    }
  }, [inSesion, time]);

  useEffect(() => {
    if (!inSesion) {
      clearInterval(intervalBreak);
      clearInterval(intervalClockHands);
      clearInterval(intervalRef);
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
    if (intervalRef.current || intervalBreak.current) return; // No iniciar si ya está corriendo
    if (time <= 0) return;
  
    setInSesion(true);
    countDown(startTime); // Iniciar el conteo visual del reloj
    console.log("El startTime es", startTime);
  
    let pauseExecuted = false;
    
    const tick = () => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          reproducirAlarma();
          clearInterval(intervalRef.current);
          clearInterval(intervalClockHands.current);
          setTime(startTime);
          intervalRef.current = null;
          setInSesion(false);
          return 0;
        }
  
        // **Pausa sin recursividad**
        if (withPause && !pauseExecuted &&(prevTime - 1)  === Math.ceil(startTime / 2)) {
          console.log("Pausa iniciada por", breakTime, "minutos");
          setPause(true);
          clearInterval(intervalRef.current);
          clearInterval(intervalClockHands.current);
          pauseExecuted = true;
         
  
          // Reactivar el temporizador sin reiniciar la función
          intervalBreak.current = setTimeout(() => {
            console.log("Fin de la pausa, continuando el temporizador...");
            setPause(false);
            
            console.log("after pause",handsClockIndex)
            countDown(startTime);
           

            intervalRef.current = setInterval(tick, 60000); // Reanudar sin llamar a startTimer()
            intervalBreak.current = null;
          }, breakTime * 60000);
  
          return prevTime; // Mantener el tiempo congelado durante la pausa
        }
  
        return prevTime - 1; // Decrementar el tiempo normalmente
      });
    };
  
    intervalRef.current = setInterval(tick, 60000);
  };
  
  

  

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const countDown = (currentTime: number) => {
    if (intervalClockHands.current) {
      clearInterval(intervalClockHands.current);
    }
    const timeDiffLines = (currentTime / CANT_LINES) * 60 * 1000;
    console.log("tiempo de diferrencia entre lineas", timeDiffLines);

    intervalClockHands.current = setInterval(() => {
      console.log("index reloj", handsClockIndex);
      setHandsClockIndex((prevIndex) => prevIndex + 1);
    }, timeDiffLines);
  };

  const modifyTime = (operator: string) => {
    if (intervalRef.current) return;

    if (time < MAX_TIME && operator === "+") {
      setTime(time + 1);
    } else if (time > 0 && operator === "-") {
      setTime(time - 5);
    }
  };

  const handlePauseChange = () => {
    setWithPause(!withPause);
  };

  return {
    startTimer,
    stopTimer,
    modifyTime,
    setPause,
    setInSesion,
    setTime,
    handlePauseChange,
    startTime,
    handsClockIndex,
    time,
    inSesion,
    pause,
    withPause,
  };
}
