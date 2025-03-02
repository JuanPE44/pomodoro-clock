import { useState, useEffect } from "react";
import axios from "axios";

const useSpotifyAuth = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("spotify_token")
  );

  useEffect(() => {
    if (token) {
      axios
        .get("https://api.spotify.com/v1/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => console.log("Usuario:", res.data))
        .catch(() => {
          logout();
        });
    }
  }, [token]);

  const logout = () => {
    setToken(null);
    localStorage.removeItem("spotify_token");
  };

  return { token, setToken, logout };
};

export default useSpotifyAuth;
