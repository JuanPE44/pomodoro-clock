import { useContext } from "react";
import { FocusSessionsContext } from "../context/FocusSessionsContext";

export const useFocusSessionsContext = () => {
  const context = useContext(FocusSessionsContext);
  if (!context) {
    throw new Error(
      "useFocusSessionsContext debe usarse dentro de un FocusSessionsProvider",
    );
  }
  return context;
};
