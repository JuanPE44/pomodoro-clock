import NavBarLink from "./NavBarLink";
import Icon from "../../icons/Icon";
import { useCurrentSection } from "../../hooks/useCurrentSection";
import { ROUTES } from "../../config/routesConfig";

export function NavBar() {
  const { currentSection } = useCurrentSection();

  return (
    <header className="h-creen flex flex-col justify-between bg-neutral-900 p-1">
      <ul className="flex flex-col gap-2">
        {/* este codio se puede mejorar con un map */}
        <li className="flex items-center gap-1 pl-3">
          <Icon name="clock" />
          <h1 className="text-primary py-1 text-xs font-bold">
            Pomodoro Clock
          </h1>
        </li>
        <li>
          <NavBarLink
            text="Focus session"
            url={ROUTES.HOME}
            current={currentSection && currentSection.path === ROUTES.HOME}
            children={<Icon name="focusSessions" />}
          />
        </li>
        <li>
          <NavBarLink
            text="Timer"
            url={ROUTES.TIMER}
            current={currentSection && currentSection.path === ROUTES.TIMER}
            children={<Icon name="timer" />}
          />
        </li>
        <li>
          <NavBarLink
            text="Alarm"
            url={ROUTES.ALARM}
            current={currentSection && currentSection.path === ROUTES.ALARM}
            children={<Icon name="alarm" />}
          />
        </li>
        <li>
          <NavBarLink
            text="Stopwatch"
            url={ROUTES.STOP_WATCH}
            current={
              currentSection && currentSection.path === ROUTES.STOP_WATCH
            }
            children={<Icon name="stopWatch" />}
          />
        </li>
        <li>
          <NavBarLink
            text="World Clock"
            current={
              currentSection && currentSection.path === ROUTES.WORLD_CLOCK
            }
            url={ROUTES.WORLD_CLOCK}
            children={<Icon name="world" />}
          />
        </li>
      </ul>
      <ul>
        <li>
          <NavBarLink
            text="Settings"
            url={ROUTES.SETTINGS}
            current={currentSection && currentSection.path === ROUTES.SETTINGS}
            children={<Icon name="settings" />}
          />
        </li>
      </ul>
    </header>
  );
}
