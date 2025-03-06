import { IconFocus } from "../../icons/IconFocus";

export function NavBar() {
  return (
    <header className="bg-neutral-900 h-creen pt-10 px-1">
      <ul>
        <li>
          <a
            href="/"
            className="flex items-center gap-2 pr-18 py-1 bg-neutral-800 rounded-sm"
          >
            <div className="h-4 w-1 bg-primary"></div>
            <IconFocus />
            <span className="text-white hidden sm:block">Focus sessions</span>
          </a>
        </li>
      </ul>
    </header>
  );
}
