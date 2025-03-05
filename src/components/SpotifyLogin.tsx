import { loginUrl } from "../config/spotify";
import { IconSpotify } from "../icons/IconSpotify";

const SpotifyLogin = () => {
  return (
    <div>
      <a href={loginUrl}>
        <button className="border border-spotify text-spotify px-4 py-2 cursor-pointer hover:scale-105 transition-transform rounded-2xl flex space-x-2 items-center">
          <span className="font-medium">Iniciar sesión</span>{" "}
          <IconSpotify width={20} height={20} color="var(--color-spotify)" />
        </button>
      </a>
    </div>
  );
};

export default SpotifyLogin;
