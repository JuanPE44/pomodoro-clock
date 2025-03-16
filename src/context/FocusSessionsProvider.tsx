import { ReactNode } from "react";
import { FocusSessionsContext } from "./FocusSessionsContext";
import { usePomodoroSetting } from "../hooks/usePomodoroSetting";

interface Props {
  children: ReactNode;
}
export const FocusSessionsProvider = ({ children }: Props) => {
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
    pause,
    withPause,
  } = usePomodoroSetting();
  return (
    <FocusSessionsContext.Provider
      value={{
        startTime,
        time,
        inSesion,
        pause,
        handsClockIndex,
        withPause,
        setTime,
        startTimer,
        stopTimer,
        modifyTime,
        setPause,
        setInSesion,
        handlePauseChange
      }}
    >
      {children}
    </FocusSessionsContext.Provider>
  );
};
