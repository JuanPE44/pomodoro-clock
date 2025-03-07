import { IconConfig } from "../../icons/IconConfig";
import { IconFocus } from "../../icons/IconFocus";
import NavBarLink from "./NavBarLink";

export function NavBar() {
  return (
    <header className="h-creen flex flex-col justify-between bg-neutral-900 p-1">
      <ul>
        <li>
          <h1 className="px-4 py-1 text-xs font-bold text-white">
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
