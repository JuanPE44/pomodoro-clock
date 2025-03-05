import React from "react";
import { Routes, Route } from "react-router-dom";
import Callback from "../components/Callback";
import { FocusSessions } from "../components/focusSessions/FocusSessions";

interface RoutesProps {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
}

const AppRoutes: React.FC<RoutesProps> = ({ token, setToken, logout }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<FocusSessions logout={logout} token={token} />}
      />
      <Route path="/callback" element={<Callback setToken={setToken} />} />
    </Routes>
  );
};

export default AppRoutes;
