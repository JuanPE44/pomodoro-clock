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
    </ContainerSection>
  );
}

export default FocusSessions;
