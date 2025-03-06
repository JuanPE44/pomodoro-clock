import { Card } from "../../ui/Card";

export function DailySessions() {
  return (
    <Card className="min-h-48">
      <header>
        <span className="font-semibold">Daily sessions</span>
      </header>
      <div className="flex-1 flex justify-center py-8">
        <div className="w-48 h-48 rounded-full border-[18px] border-neutral-700"></div>
      </div>
    </Card>
  );
}
