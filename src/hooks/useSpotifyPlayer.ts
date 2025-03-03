import { useEffect, useState } from "react";
import { getPlayerData } from "../services/getPlayerData";

interface Props {
  token: string;
}

export const useSpotifyPlayer = ({ token }: Props) => {
  const [player, setPlayer] = useState<Spotify.Player | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [track, setTrack] = useState<{
    name: string;
    artist: string;
    cover: string;
  } | null>(null);
  const [device, setDevice] = useState<{
    id: string;
    name: string;
    type: string;
  } | null>();
  const [deviceId, setDeviceId] = useState<string | null>(null);
  const [isPremium, setIsPremium] = useState<boolean | null>(null);

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

        // Sincroniza con el dispositivo actual
        fetch("https://api.spotify.com/v1/me/player", {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data && data.device) {
              setDevice({
                id: data.device.id,
                name: data.device.name,
                type: data.device.type,
              });
            }
          })
          .catch((err) =>
            console.error("Error obteniendo el dispositivo actual:", err)
          );
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

      newPlayer.addListener("ready", ({ device_id }) => {
        console.log("Player ready, device ID:", device_id);
        setDeviceId(device_id); // Guardar el device_id en el estado
      });

      newPlayer.addListener("account_error", ({ message }) => {
        console.error("Error de cuenta:", message);
      });

      setPlayer(newPlayer);
    };
  }, [token]);

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

  // Obtiene el dispositivo en uso al ingresar a la app
  useEffect(() => {
    if (!token) return;

    const fetchDevice = async () => {
      const data = await getPlayerData(token);
      if (data) {
        setDevice(data.device);
        setDevice({
          id: data.device.id,
          name: data.device.name,
          type: data.device.type,
        });
        setTrack({
          name: data.item.name,
          artist: data.item.artists[0].name,
          cover: data.item.album.images[0].url,
        });
        setIsPlaying(data.is_playing);
      }
    };

    fetchDevice();
  }, [token]);

  // Función para poner la app como dispositivo principal
  const setActiveDevice = () => {
    if (!token || !deviceId) return;

    fetch("https://api.spotify.com/v1/me/player", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        device_ids: [deviceId],
        play: true,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error activando el player");
        }
        // Luego de activar el dispositivo, obtenemos la info actualizada
        return fetch("https://api.spotify.com/v1/me/player", {
          headers: { Authorization: `Bearer ${token}` },
        });
      })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.device) {
          setDevice({
            id: data.device.id,
            name: data.device.name,
            type: data.device.type,
          });
        }
      })
      .catch((err) => console.error("Error activando el player:", err));
  };

  const togglePlay = () => {
    player?.togglePlay().then(() => {
      console.log("Toggled playback!");
    });
  };

  const previousTrack = () => {
    player
      ?.previousTrack()
      .then(() => {
        console.log("Canción anterior reproducida");
      })
      .catch((error) => {
        console.error("Error al pasar a la canción anterior:", error);
      });
  };

  const nextTrack = () => {
    player
      ?.nextTrack()
      .then(() => {
        console.log("Canción siguiente reproducida");
      })
      .catch((error) => {
        console.error("Error al avanzar a la siguiente canción:", error);
      });
  };

  return {
    player,
    setPlayer,
    isPlaying,
    nextTrack,
    previousTrack,
    togglePlay,
    track,
    device,
    isPremium,
    setActiveDevice,
  };
};
