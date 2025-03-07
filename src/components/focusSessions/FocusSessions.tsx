import ContainerSection from "../ui/ContainerSection";
import { DailySessions } from "./DailySessions/DailySessions";
import { Pomodoro } from "./pomodoro/Pomodoro";
import { Spotify } from "./spotify/Spotify";
import { Tasks } from "./tasks/Tasks";

interface Props {
  token: string | null;
  logout: () => void;
}
function FocusSessions({ token, logout }: Props) {
  return (
    <ContainerSection>
      <div className="grid max-w-[900px] grid-cols-1 items-start gap-4 p-5 md:grid-cols-2">
        <div className="grid gap-4">
          <Pomodoro />
          <Tasks />
        </div>
        <div className="grid gap-4">
          <DailySessions />
          <Spotify token={token} logout={logout} />
        </div>
      </div>
    </ContainerSection>
  );
}

export default FocusSessions;
