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
    <div className="p-2 text-white bg-[#181818dd] filter backdrop-blur-md  rounded-2xl">
      <div className="flex justify-between w-full items-center">
        <IconSpotify type={2} />
        <div
          onClick={logout}
          className="cursor-pointer hover:bg-neutral-400 rounded-sm p-1"
        >
          <IconMenu />
        </div>
      </div>
      {!token ? (
        <div className="p-10 text-center flex flex-col items-center gap-5">
          <p>Enhance your focus with music and podcasts from Spotify</p>
          <SpotifyLogin />
        </div>
      ) : (
        <div className="flex flex-col gap-3 items-start">
          <SpotifyPlayer token={token} />
        </div>
      )}
    </div>
  );
}
