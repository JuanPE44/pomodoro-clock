import { PomoClock } from "./PomoClock";
import { Card } from "../../ui/Card";
import { PomoSettings } from "./PomoSettings";
import { useFocusSessionsContext } from "../../../hooks/useFocusSessionsContext";

export function Pomodoro() {
  const {
    startTimer,
    stopTimer,
    modifyTime,
    setPause,
    setInSesion,
    handsClockIndex,
    startTime,
    time,
    inSesion,
    pause,
  } = useFocusSessionsContext();

  return (
    <Card className="h-96 flex flex-col justify-start items-center relative overflow-hidden">
      {inSesion ? (
        <PomoClock
          time={time}
          startTime={startTime}
          pause={pause}
          setPause={setPause}
          setInSesion={setInSesion}
          handsClockIndex={handsClockIndex}
          startTimer={startTimer}
          stopTimer={stopTimer}
        />
      ) : (
        <PomoSettings
          time={time}
          modifyTime={modifyTime}
          startTimer={startTimer}
        />
      )}
    </Card>
  );
}
