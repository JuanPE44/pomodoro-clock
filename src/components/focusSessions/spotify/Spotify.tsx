import { IconSpotify } from "../../../icons/IconSpotify";
import { Card } from "../../ui/Card";
import DropdownMenu from "../../ui/DropdownMenu";
import { SpotifyAlbums } from "./SpotifyAlbums";
import SpotifyLogin from "./SpotifyLogin";
import SpotifyPlayer from "./SpotifyPlayer";

interface Props {
  token: string | null;
  logout: () => void;
}
export function Spotify({ token, logout }: Props) {
  return (
    <Card className="flex flex-col gap-2">
      <header className="flex w-full items-center justify-between">
        <IconSpotify type={2} />
        <DropdownMenu>
          <li className="rounded-sm px-2 hover:bg-[#18181844]">
            <li className="rounded-sm px-2 hover:bg-[#18181844]">Opciones</li>
            {token && (
              <button onClick={logout} className="w-max cursor-pointer text-xs">
                Cerrar sesion
              </button>
            )}
          </li>
        </DropdownMenu>
      </header>
      {!token ? (
        <div className="flex flex-col items-center gap-5 p-8 text-center">
          <p className="text-sm text-neutral-200">
            Enhance your focus with music and podcasts from Spotify
          </p>
          <SpotifyLogin />
        </div>
      ) : (
        <div className="flex flex-col items-start gap-3">
          <SpotifyPlayer token={token} />
          <SpotifyAlbums token={token} />
        </div>
      )}
    </Card>
  );
}
