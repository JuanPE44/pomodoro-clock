import { ReactNode, useState } from "react";
import { FocusSessionsContext } from "./FocusSessionsContext";

export const FocusSessionsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [points, setPoints] = useState(0);

  const updatePoints = () => {
    setPoints((prevPoints) => prevPoints + 1);
  };
  return (
    <FocusSessionsContext.Provider value={{ points, updatePoints }}>
      {children}
    </FocusSessionsContext.Provider>
  );
};
