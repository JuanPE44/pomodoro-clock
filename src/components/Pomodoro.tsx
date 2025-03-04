import { useState, useRef } from "react";
import { Card } from "./Card";
export function Pomodoro() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const MAX_TIME: number = 240;
  const MIN_TIME: number = 240;
  const startTimer = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 60000);

    if (time === 0) {
      clearInterval(intervalRef.current);
    }
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const modifyTime = (operator: string) => {
    if (time < MAX_TIME && operator === "+") {
      setTime(time + 5);
    } else if (time > MIN_TIME && operator === "-") {
      setTime(time - 5);
    }
  };

  return (
    <Card className="flex flex-col justify-start items-center relative overflow-hidden">
      <div className="w-[90%] h-[30%] flex flex-col justify-center items-center m-5">
        <h1 className="h-1/2  text-xl text-white font-bold flex items-center mb-2">
          Preparate Para concentrarte
        </h1>
        <p className="h-1/2 text-center text-sm text-neutral-200">
          We'll turn off notificationns and app alerts during each session. For
          longer sessions, we'll add a short break so you can recharge.
        </p>
      </div>

      <div className="w-[50%] h-[22%] m-5 bg-[#242323] flex flex-row justify-center items-center shadow-sm rounded-[3px] border-b border-white hover:brightness-125 hover:rounded-[5px] overflow-hidden">
        <div className="w-[70%] h-full flex text-white items-center justify-center flex-col  hover:brightness-125">
          <div className="text-xl">{time}</div>
          <div className="text-xs">min</div>
        </div>
        <div className="w-[30%] h-full flex flex-col items-center justify-center">
          <button
            onClick={() => modifyTime("+")}
            className="w-full h-1/2 text-white border-l border-b border-[#5c5c5c] hover:bg-[#5c5c5c] hover:opacity-40 "
          >
            {" "}
          </button>
          <button
            onClick={() => modifyTime("-")}
            className="w-full h-1/2 text-white border-l border-[#5c5c5c] hover:bg-[#5c5c5c] hover:opacity-40 "
          >
            ˅
          </button>
        </div>
      </div>
      <div className="w-full px-10  flex justify-center items-center">
        <button
          onClick={startTimer}
          className="w-full h-full bg-white text-black text-sm rounded-sm py-1 hover:opacity-60"
        >
          {" "}
          ▶ Iniciar Sesion de concentracion{" "}
        </button>
      </div>
    </Card>
  );
}
