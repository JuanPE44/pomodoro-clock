import React, { useEffect, useState } from "react";

interface SpotifyPlayerProps {
  token: string;
}

const SpotifyPlayer: React.FC<SpotifyPlayerProps> = ({ token }) => {
  const [player, setPlayer] = useState<Spotify.Player | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState<{
    name: string;
    artist: string;
    cover: string;
  } | null>(null);
  const [isPremium, setIsPremium] = useState<boolean | null>(null);

  // 🚀 Verificar si la cuenta es Premium
  useEffect(() => {
    fetch("https://api.spotify.com/v1/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Tipo de cuenta:", data.product);
        setIsPremium(data.product === "premium");
      })
      .catch((err) => console.error("Error verificando cuenta:", err));
  }, [token]);

  useEffect(() => {
    if (!window.Spotify) {
      const script = document.createElement("script");
      script.src = "https://sdk.scdn.co/spotify-player.js";
      script.async = true;
      document.body.appendChild(script);
    }

    window.onSpotifyWebPlaybackSDKReady = () => {
      const newPlayer = new window.Spotify.Player({
        name: "Pomodoro Player",
        getOAuthToken: (cb) => cb(token),
        volume: 0.5,
      });

      newPlayer.addListener("player_state_changed", (state) => {
        if (!state) return;

        setIsPlaying(!state.paused);
        setTrack({
          name: state.track_window.current_track.name,
          artist: state.track_window.current_track.artists[0].name,
          cover: state.track_window.current_track.album.images[0].url,
        });
      });

      newPlayer.addListener("ready", ({ device_id }) => {
        console.log("Player ready, device ID:", device_id);
      });

      newPlayer.addListener("not_ready", ({ device_id }) => {
        console.log("Player not ready, device ID:", device_id);
      });

      newPlayer.connect().then((success) => {
        if (success) {
          console.log("Spotify Player conectado");
        } else {
          console.error("Error al conectar el Spotify Player");
        }
      });

      newPlayer.addListener("account_error", ({ message }) => {
        console.error("Error de cuenta:", message);
      });

      setPlayer(newPlayer);
    };
  }, [token]);

  // 🚀 Verifica que Spotify permita el control del player
  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/player", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        device_ids: [player?._options.id],
        play: true,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Activando player:", data))
      .catch((err) => console.error("Error activando el player:", err));
  }, [token]);

  // 🔄 Función para volver a autenticar si hay error de permisos
  const reauthenticate = () => {
    const CLIENT_ID = "1feb12dea42d4d64892be526df4f1989";
    const REDIRECT_URI = "http://localhost:5173/";
    const SCOPES = [
      "user-read-playback-state",
      "user-modify-playback-state",
      "streaming",
      "user-read-currently-playing",
      "user-library-read",
      "app-remote-control",
    ].join("%20");

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&response_type=token&show_dialog=true`;
    window.location.href = authUrl;
  };

  if (isPremium === false) {
    return (
      <div className="spotify-player">
        <p>⚠️ Necesitas una cuenta Premium para usar el reproductor.</p>
      </div>
    );
  }

  return (
    <div className="spotify-player">
      {track ? (
        <div className="player-content">
          <img src={track.cover} alt="Album cover" className="album-cover" />
          <div className="track-info">
            <h3>{track.name}</h3>
            <p>{track.artist}</p>
          </div>
          <button onClick={() => player?.togglePlay()} className="play-btn">
            {isPlaying ? "⏸️" : "▶️"}
          </button>
        </div>
      ) : (
        <div>
          <button onClick={() => player?.connect()}>🔄 Iniciar Player</button>
          <button onClick={reauthenticate}>🔑 Re-autenticar Spotify</button>
        </div>
      )}
    </div>
  );
};

export default SpotifyPlayer;
