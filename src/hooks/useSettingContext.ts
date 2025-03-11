import { useContext } from "react";
import { SettingsContext } from "../context/SettingsContext";

export const useSettingContext = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error(
      "useFocusSessionsContext debe usarse dentro de un FocusSessionsProvider",
    );
  }
  return context;
};
