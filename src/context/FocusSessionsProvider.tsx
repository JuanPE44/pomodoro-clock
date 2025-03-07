import { ReactNode } from "react";
import { FocusSessionsContext } from "./FocusSessionsContext";
import { usePomodoroSetting } from "../hooks/usePomodoroSetting";

interface Props{
  children: ReactNode
}
export const FocusSessionsProvider = ({ children }: Props) => {
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
    } = usePomodoroSetting();
  return (
    <FocusSessionsContext.Provider value={{ startTime, time, inSesion, pause, handsClockIndex,startTimer,stopTimer,modifyTime,setPause,setInSesion}}>
      {children}
    </FocusSessionsContext.Provider>
  );
};
