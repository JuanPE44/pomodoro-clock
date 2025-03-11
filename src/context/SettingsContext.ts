import { createContext } from "react";

interface SettingContextType {
  preferenceFocusTime: number;
  preferenceRestTime: number;
  setPreferenceFocusTime: React.Dispatch<React.SetStateAction<number>>;
  setPreferenceRestTime: React.Dispatch<React.SetStateAction<number>>;
  
}

// Creamos el contexto con valores por defecto
export const SettingsContext = createContext<
  SettingContextType | undefined
>(undefined);
