import { loginUrl } from "../../../config/spotify";
import { IconSpotify } from "../../../icons/IconSpotify";

const SpotifyLogin = () => {
  return (
    <div>
      <a href={loginUrl}>
        <button className="border-spotify text-spotify flex cursor-pointer items-center space-x-2 rounded-2xl border px-4 py-2 transition-transform hover:scale-105">
          <span className="font-medium">Iniciar sesión</span>{" "}
          <IconSpotify width={20} height={20} color="var(--color-spotify)" />
        </button>
      </a>
    </div>
  );
};

export default SpotifyLogin;
