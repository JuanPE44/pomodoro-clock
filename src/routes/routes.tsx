import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Callback from "../components/Callback";
import FocusSessions from "../components/focusSessions/FocusSessions";
import Settings from "../components/settings/Settings";

interface RoutesProps {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
}

const AppRoutes: React.FC<RoutesProps> = ({ token, setToken, logout }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<FocusSessions logout={logout} token={token} />}
        />
        <Route path="/callback" element={<Callback setToken={setToken} />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
