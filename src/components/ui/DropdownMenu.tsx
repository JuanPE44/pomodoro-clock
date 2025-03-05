import { useState } from "react";
import { IconMenu } from "../../icons/IconMenu";

interface Props {
  children: React.ReactNode;
}
export default function DropdownMenu({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div
        className="hover:bg-neutral-700 rounded-sm p-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IconMenu />
      </div>
      <ul
        className={`absolute top-8 -right-8 flex-col gap-2 bg-neutral-700 rounded-md p-1 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {children}
      </ul>
    </div>
  );
}
