import { IconMenu } from "../icons/IconMenu";
import { IconSpotify } from "../icons/IconSpotify";
import SpotifyLogin from "./SpotifyLogin";
import SpotifyPlayer from "./SpotifyPlayer";

interface Props {
  token: string | null;
  logout: () => void;
}
export function Spotify({ token, logout }: Props) {
  return (
    <div className="p-2 text-white bg-neutral-500  rounded-2xl">
      {!token ? (
        <SpotifyLogin />
      ) : (
        <div className="flex flex-col gap-3 items-start">
          <div className="flex justify-between w-full items-center">
            <IconSpotify type={2} />
            <div
              onClick={logout}
              className="cursor-pointer hover:bg-neutral-400 rounded-sm p-1"
            >
              <IconMenu />
            </div>
          </div>
          <SpotifyPlayer token={token} />
        </div>
      )}
    </div>
  );
}
