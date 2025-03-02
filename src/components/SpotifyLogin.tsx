const CLIENT_ID = "1feb12dea42d4d64892be526df4f1989";
const REDIRECT_URI = "http://localhost:5173/callback";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const SCOPES = "user-read-playback-state user-modify-playback-state streaming";

const SpotifyLogin = () => {
  const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=${RESPONSE_TYPE}&show_dialog=true`;

  return (
    <div>
      <a href={loginUrl}>
        <button>Iniciar sesión con Spotify</button>
      </a>
    </div>
  );
};

export default SpotifyLogin;
