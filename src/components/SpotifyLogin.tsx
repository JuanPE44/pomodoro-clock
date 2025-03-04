import { IconSpotify } from "../icons/IconSpotify";

const CLIENT_ID = "1feb12dea42d4d64892be526df4f1989";
const REDIRECT_URI = "http://localhost:5173/callback";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPES =
  "user-read-playback-state user-modify-playback-state streaming user-read-private user-read-recently-played user-read-currently-playing";

const SpotifyLogin = () => {
  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=${RESPONSE_TYPE}&show_dialog=true&robustness=medium`;
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
