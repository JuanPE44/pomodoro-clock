import { IconSpotify } from "../icons/IconSpotify";
import SpotifyLogin from "./SpotifyLogin";
import SpotifyPlayer from "./SpotifyPlayer";

interface Props {
  token: string | null;
  logout: () => void;
}
export function Spotify({ token, logout }: Props) {
  return (
    <div className="p-4 text-white bg-neutral-500 min-h-60 rounded-2xl">
      {!token ? (
        <SpotifyLogin />
      ) : (
        <div className="flex flex-col gap-3 items-start">
          <div className="flex justify-between w-full items-center">
            <IconSpotify />
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 rounded-2xl"
            >
              Cerrar sesión
            </button>
          </div>
          <SpotifyPlayer token={token} />
        </div>
      )}
    </div>
  );
}
