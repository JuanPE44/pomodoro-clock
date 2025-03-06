import { IconConfig } from "../../icons/IconConfig";
import { IconFocus } from "../../icons/IconFocus";
import NavBarLink from "./NavBarLink";

export function NavBar() {
  return (
    <header className="bg-neutral-900 h-creen p-1 flex flex-col justify-between">
      <ul>
        <li>
          <h1 className="text-xs px-4 text-white font-bold py-1">
            Pomodoro Clock
          </h1>
        </li>
        <li>
          <NavBarLink
            text="Focus session"
            url="/"
            current={true}
            children={<IconFocus />}
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
