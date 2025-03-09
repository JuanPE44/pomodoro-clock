import { IconConfig } from "../../icons/IconConfig";
import { IconFocus } from "../../icons/IconFocus";
import { ROUTES } from "../../config/routesConfig";
import NavBarLink from "./NavBarLink";
import { IconTimer } from "../../icons/IconTimer";
import { IconAlarm } from "../../icons/IconAlarm";
import { IconStopWatch } from "../../icons/IconStopWatch";
import { IconWorld } from "../../icons/IconWorld";
import { IconCLock } from "../../icons/IconClock";

export function NavBar() {
  return (
    <header className="h-creen flex flex-col justify-between bg-neutral-900 p-1 ">
      <ul className="flex flex-col gap-2">
        <li className="flex gap-1 items-center pl-3">
          <IconCLock />
          <h1 className=" py-1 text-xs font-bold text-primary">
            Pomodoro Clock
          </h1>
        </li>
        <li>
          <NavBarLink
            text="Focus session"
            url={ROUTES.HOME}
            current={true}
            children={<IconFocus />}
          />
        </li>
        <li>
          <NavBarLink
            text="Timer"
            url={ROUTES.TIMER}
            children={<IconTimer />}
          />
        </li>
        <li>
          <NavBarLink
            text="Alarm"
            url={ROUTES.ALARM}
            children={<IconAlarm />}
          />
        </li>
        <li>
          <NavBarLink
            text="Stopwatch"
            url={ROUTES.STOP_WATCH}
            children={<IconStopWatch />}
          />
        </li>
        <li>
          <NavBarLink
            text="World Clock"
            url={ROUTES.WORLD_CLOCK}
            children={<IconWorld />}
          />
        </li>
       
      </ul>

      <ul>
        <li>
          <NavBarLink
            text="Settings"
            url="/settings"
            children={<IconConfig />}
          />
        </li>
      </ul>
    </header>
  );
}
