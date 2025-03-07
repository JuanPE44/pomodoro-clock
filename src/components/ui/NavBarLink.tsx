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
      className={`flex items-center gap-2 pr-18 py-1 rounded-sm hover:bg-neutral-700 ${
        current && "bg-neutral-700"
      }`}
      >
      <div className={`h-4 w-1 ${current && "bg-primary"}`}></div>
      {children}
      <span className="text-white text-sm hidden sm:block">{text}</span>
    </Link>
  );
}

export default NavBarLink;
