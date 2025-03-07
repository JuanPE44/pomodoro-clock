export const SPOTIFY_SCOPES = [
  "user-read-playback-state",
  "user-read-recently-played",
  "user-read-currently-playing",
  "user-read-private",
  "user-modify-playback-state",
  "streaming",
  "user-read-email",
].join(" ");
export const SPOTIFY_CLIENT_ID = "1feb12dea42d4d64892be526df4f1989";
export const SPOTIFY_REDIRECT_URI = "http://localhost:5173/callback";
export const SPOTIFY_AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const SPOTIFY_RESPONSE_TYPE = "token";

export const loginUrl = `${SPOTIFY_AUTH_ENDPOINT}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(
  SPOTIFY_REDIRECT_URI,
)}&scope=${encodeURIComponent(
  SPOTIFY_SCOPES,
)}&response_type=${SPOTIFY_RESPONSE_TYPE}&show_dialog=true`;
