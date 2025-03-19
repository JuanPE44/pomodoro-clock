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
    setTime,
    handlePauseChange,
    handsClockIndex,
    startTime,
    time,
    inSesion,
    withPause,
    pause,
    inBreak
  } = useFocusSessionsContext();

  return (
    <Card className="relative flex flex-col items-center justify-start overflow-hidden">
      <header className="w-full">
        <span className="font-medium">Focus session</span>
      </header>
      <div className="h-96 w-full">
        {inSesion ? (
          <PomoClock
            time={time}
            startTime={startTime}
            pause={pause}
            handsClockIndex={handsClockIndex}
            inBreak={inBreak}
            setPause={setPause}
            setInSesion={setInSesion}
            setTime={setTime}
            startTimer={startTimer}
            stopTimer={stopTimer}
            
          />
        ) : (
          <PomoSettings
            time={time}
            withPause={withPause}
            modifyTime={modifyTime}
            startTimer={startTimer}
            handlePauseChange={handlePauseChange}
          />
        )}
      </div>
    </Card>
  );
}
