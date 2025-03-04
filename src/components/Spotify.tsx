import { IconSpotify } from "../icons/IconSpotify";
import { Card } from "./Card";
import DropdownMenu from "./DropdownMenu";
import SpotifyLogin from "./SpotifyLogin";
import SpotifyPlayer from "./SpotifyPlayer";

interface Props {
  token: string | null;
  logout: () => void;
}
export function Spotify({ token, logout }: Props) {
  return (
    <Card>
      <div className="flex justify-between w-full items-center">
        <IconSpotify type={2} />
        <DropdownMenu>
          <li className="hover:bg-[#18181844] rounded-sm px-2 ">
            {token && (
              <button onClick={logout} className="text-xs w-max cursor-pointer">
                Cerrar sesion
              </button>
            )}
          </li>
        </DropdownMenu>
      </div>
      {!token ? (
        <div className="p-8 text-center flex flex-col items-center gap-5">
          <p className="text-sm text-neutral-200">
            Enhance your focus with music and podcasts from Spotify
          </p>
          <SpotifyLogin />
        </div>
      ) : (
        <div className="flex flex-col gap-3 items-start">
          <SpotifyPlayer token={token} />
        </div>
      )}
    </Card>
  );
}
