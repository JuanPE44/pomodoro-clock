import { createContext } from "react";

interface FocusSesionsContextType {
  points: number;
  updatePoints: () => void;
}

// Creamos el contexto con valores por defecto
export const FocusSessionsContext = createContext<
  FocusSesionsContextType | undefined
>(undefined);
