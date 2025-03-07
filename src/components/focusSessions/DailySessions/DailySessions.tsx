import { Card } from "../../ui/Card";
import DropdownMenu from "../../ui/DropdownMenu";

export function DailySessions() {
  return (
    <Card className="min-h-48">
      <header className="flex w-full items-center justify-between">
        <span className="font-semibold">Daily sessions</span>
        <DropdownMenu>
          <li className="rounded-sm px-2 hover:bg-[#18181844]">Opciones</li>
        </DropdownMenu>
      </header>
      <div className="flex flex-1 items-center justify-around py-8">
        <div className="flex flex-col items-center">
          <span className="text-sm">Yesterday</span>
          <span className="text-3xl font-medium">42</span>
          <span className="text-sm">minutes</span>
        </div>
        <div className="flex h-48 w-48 items-center justify-center rounded-full border-[18px] border-neutral-700">
          <div className="flex flex-col items-center">
            <span className="text-sm">Daily goal</span>
            <span className="text-3xl font-medium">1</span>
            <span className="text-sm">hour</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm">Streak</span>
          <span className="text-3xl font-medium">0</span>
          <span className="text-sm">days</span>
        </div>
      </div>
    </Card>
  );
}
