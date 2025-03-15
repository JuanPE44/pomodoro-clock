import { useState } from "react";
import Icon from "../../icons/Icon";

interface Props {
  children: React.ReactNode;
}
export default function DropdownMenu({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative shadow-2xl">
      <div
        className="cursor-pointer rounded-sm p-1 hover:bg-neutral-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon name="menu" size={20} />
      </div>
      <ul
        className={`absolute top-8 -right-8 flex-col gap-2 rounded-md bg-neutral-700 p-1 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {children}
      </ul>
    </div>
  );
}
