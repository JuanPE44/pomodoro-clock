import { IconFocus } from "../../icons/IconFocus";

export function NavBar() {
  return (
    <header className="bg-neutral-900 h-creen pt-10 px-1">
      <ul>
        <li className="flex items-center gap-2 pr-18 py-1 bg-neutral-800 rounded-sm">
          <div className="h-4 w-1 bg-task"></div>
          <IconFocus />
          <a href="#" className="text-white">
            Focus sessions
          </a>
        </li>
      </ul>
    </header>
  );
}
