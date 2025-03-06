import { PomoClock } from "./PomoClock";
import { Card } from "../../ui/Card";
import { PomoSettings } from "./PomoSettings";
import { usePomodoroSetting } from "../../../hooks/usePomodoroSetting";

export function Pomodoro() {
  const {startTimer,
    stopTimer,
    modifyTime,
    setPause,
    setInSesion,
    startTime,
    time,
    inSesion,
    pause } = usePomodoroSetting();
  

  return (
    <Card className="h-96 flex flex-col justify-start items-center relative overflow-hidden">
      {inSesion ? (
        <PomoClock
          time={time}
          startTime={startTime}
          pause={pause}
          setPause={setPause}
          setInSesion={setInSesion}
          startTimer={startTimer}
          stopTimer={stopTimer}
        />
      ) : (
          <PomoSettings 
          time={time} 
          modifyTime={modifyTime} 
          startTimer={startTimer} />
      )}
    </Card>
  );
}
