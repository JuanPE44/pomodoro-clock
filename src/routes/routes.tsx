import { Routes, Route } from "react-router-dom";
import React from "react";
import Callback from "../components/Callback";
import FocusSessions from "../components/focusSessions/FocusSessions";
import Settings from "../components/settings/Settings";
import { Alarm } from "../components/alarm/Alarm";
import { StopWatch } from "../components/stopWatch/StopWatch";
import { Timer } from "../components/timer/Timer";
import { WorldClock } from "../components/worldClock/WorldClock";
import { ROUTES } from "../config/routesConfig";

interface RoutesProps {
  token: string | null;
  setToken: (token: string) => void;
  logout: () => void;
}

const AppRoutes: React.FC<RoutesProps> = ({ token, setToken, logout }) => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={<FocusSessions logout={logout} token={token} />}
      />
      <Route path={ROUTES.CALLBACK} element={<Callback setToken={setToken} />} />
      <Route path={ROUTES.SETTINGS} element={<Settings />} />
      <Route path={ROUTES.ALARM} element={<Alarm />}/>
      <Route path={ROUTES.STOP_WATCH} element={<StopWatch />} />
      <Route path={ROUTES.TIMER} element={<Timer />} />
      <Route path={ROUTES.WORLD_CLOCK} element={<WorldClock />} />
    </Routes>
  );
};

export default AppRoutes;
