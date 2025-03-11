import { ReactNode } from "react";
import { useSetting  } from "../hooks/useSetting"; 
import { SettingsContext } from "./SettingsContext";

interface Props {
    children: ReactNode;
  }

  export const SettingContextProvider = ({ children }: Props) => {
    const {
      preferenceFocusTime,
      setPreferenceFocusTime,
      preferenceRestTime,
      setPreferenceRestTime
    } = useSetting(); 

    return (
      <SettingsContext.Provider
        value={{
          preferenceFocusTime,
          setPreferenceFocusTime,
          preferenceRestTime,
          setPreferenceRestTime
        }}
      >
        {children}
      </SettingsContext.Provider>
    );
}