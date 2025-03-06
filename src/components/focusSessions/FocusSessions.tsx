import { DailySessions } from "./DailySessions/DailySessions";
import { Pomodoro } from "./pomodoro/Pomodoro";
import { Spotify } from "./spotify/Spotify";
import { Tasks } from "./tasks/Tasks";

interface Props {
  token: string | null;
  logout: () => void;
}
export function FocusSessions({ token, logout }: Props) {
  return (
    <div className="flex-1 bg-neutral-800 p-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 items-start max-w-[900px]">
        <div className="grid gap-4">
          <Pomodoro />
          <Tasks />
        </div>
        <div className="grid gap-4">
          <DailySessions />
          <Spotify token={token} logout={logout} />
        </div>
      </div>
    </div>
  );
}
