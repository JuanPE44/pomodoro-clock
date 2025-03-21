import { createContext } from "react";

interface FocusSesionsContextType {
  startTimer: () => void;
  stopTimer: () => void;
  modifyTime: (operator: string) => void;
  setPause: React.Dispatch<React.SetStateAction<boolean>>;
  setInSesion: React.Dispatch<React.SetStateAction<boolean>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  handlePauseChange: () => void;
  handsClockIndex: number;
  startTime: number;
  time: number;
  inSesion: boolean;
  pause: boolean;
  withPause: boolean;
  inBreak: boolean;
}

// Creamos el contexto con valores por defecto
export const FocusSessionsContext = createContext<
  FocusSesionsContextType | undefined
>(undefined);
