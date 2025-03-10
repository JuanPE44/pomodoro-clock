import { ROUTES } from "./routesConfig";

export interface Section {
  path: string;
  label: string;
}


export const SECTIONS = [
  { path: ROUTES.HOME, label: 'Focus session' },
  { path: ROUTES.TIMER, label: 'Timer' },
  { path: ROUTES.ALARM, label: 'Alarm' },
  { path: ROUTES.STOP_WATCH, label: 'Stop watch' },
  { path: ROUTES.WORLD_CLOCK, label: 'World clock' },
  { path: ROUTES.SETTINGS, label: 'Settings' },
];