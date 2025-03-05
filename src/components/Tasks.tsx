import { IconTasks } from "../icons/IconTasks";
import { Card } from "./Card";
import DropdownMenu from "./DropdownMenu";

export function Tasks() {
  return (
    <Card className="min-h-48">
      <header className="flex justify-between w-full items-center">
        <div className="flex items-center gap-0.5">
          <IconTasks color="var(--color-primary)" />
          <span className="font-semibold">Tasks</span>
        </div>
        <DropdownMenu>
          <li className="hover:bg-[#18181844] rounded-sm px-2 ">Opciones</li>
        </DropdownMenu>
      </header>
    </Card>
  );
}
