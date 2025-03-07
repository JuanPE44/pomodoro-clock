import { Link } from "react-router-dom";

interface Props {
  text: string;
  url: string;
  current?: boolean;
  children: React.ReactNode;
}
function NavBarLink({ text, url, current = false, children }: Props) {
  return (
    <Link
      to={url}
      className={`flex items-center gap-2 rounded-sm py-1 pr-18 hover:bg-neutral-700 ${
        current && "bg-neutral-700"
      }`}
    >
      <div className={`h-4 w-1 ${current && "bg-primary"}`}></div>
      {children}
      <span className="hidden text-sm text-white sm:block">{text}</span>
    </Link>
  );
}

export default NavBarLink;
