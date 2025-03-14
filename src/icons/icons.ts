import { SvgTimer } from "./svgs";

export const icons = {
  timer: SvgTimer,
} as const;

export type IconName = keyof typeof icons;
