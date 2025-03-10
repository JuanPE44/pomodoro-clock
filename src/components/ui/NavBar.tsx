import { IconConfig } from "../../icons/IconConfig";
import { IconFocus } from "../../icons/IconFocus";
import { ROUTES } from "../../config/routesConfig";
import NavBarLink from "./NavBarLink";
import { IconTimer } from "../../icons/IconTimer";
import { IconAlarm } from "../../icons/IconAlarm";
import { IconStopWatch } from "../../icons/IconStopWatch";
import { IconWorld } from "../../icons/IconWorld";
import { IconCLock } from "../../icons/IconClock";
import { useCurrentSection } from "../../hooks/useCurrentSection";

export function NavBar () {

  const { currentSection } = useCurrentSection();


  return (
    <header className="h-creen flex flex-col justify-between bg-neutral-900 p-1 ">
      <ul className="flex flex-col gap-2">
        {/* este codio se puede mejorar con un map */}
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
            current={currentSection && currentSection.path === ROUTES.HOME}
            children={<IconFocus />}
          />
        </li>
        <li>
          <NavBarLink
            text="Timer"
            url={ROUTES.TIMER}
            current={currentSection && currentSection.path === ROUTES.TIMER}
            children={<IconTimer />}
          />
        </li>
        <li>
          <NavBarLink
            text="Alarm"
            url={ROUTES.ALARM}
            current={currentSection && currentSection.path === ROUTES.ALARM}

            children={<IconAlarm />}
          />
        </li>
        <li>
          <NavBarLink
            text="Stopwatch"
            url={ROUTES.STOP_WATCH}
            current={currentSection && currentSection.path === ROUTES.STOP_WATCH}

            children={<IconStopWatch />}
          />
        </li>
        <li>
          <NavBarLink
            text="World Clock"
            current={currentSection && currentSection.path === ROUTES.WORLD_CLOCK}
            url={ROUTES.WORLD_CLOCK}
            children={<IconWorld />}
          />
        </li>
      </ul>
      <ul>
        <li>
          <NavBarLink
            text="Settings"
            url={ROUTES.SETTINGS}
            current={currentSection && currentSection.path === ROUTES.SETTINGS}
            children={<IconConfig />}
          />
        </li>
      </ul>
    </header>
  );
}
