import { useEffect, useState } from "react";

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

  // 🎯 Polling para mantener sincronizado el dispositivo activo
  useEffect(() => {
    if (!token) return;

    const interval = setInterval(() => {
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
          console.error("Error obteniendo el dispositivo activo:", err)
        );
    }, 5000); // Cada 5 segundos

    return () => clearInterval(interval);
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
  }, [token]);

  useEffect(() => {
    if (!token) return;

    fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (res.status === 204 || res.status === 401) {
          console.log("No hay canción en reproducción o token inválido");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.item) {
          setTrack({
            name: data.item.name,
            artist: data.item.artists[0].name,
            cover: data.item.album.images[0].url,
          });
          setIsPlaying(data.is_playing);
        } else {
          // Si no hay una canción en reproducción, buscamos la última escuchada
          fetch(
            "https://api.spotify.com/v1/me/player/recently-played?limit=1",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
            .then((res) => res.json())
            .then((recentData) => {
              if (recentData.items.length > 0) {
                const lastTrack = recentData.items[0].track;
                setTrack({
                  name: lastTrack.name,
                  artist: lastTrack.artists[0].name,
                  cover: lastTrack.album.images[0].url,
                });
              }
            })
            .catch((err) =>
              console.error(
                "Error obteniendo la última canción reproducida:",
                err
              )
            );
        }
      })
      .catch((err) =>
        console.error("Error obteniendo la canción en reproducción:", err)
      );
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
    if (!deviceId) return; // Asegurar que hay un deviceId

    fetch(
      `https://api.spotify.com/v1/me/player/${isPlaying ? "pause" : "play"}`,
      {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then(() => setIsPlaying(!isPlaying)) // Cambiar el estado después de la acción
      .catch((err) =>
        console.error("Error al cambiar el estado de reproducción:", err)
      );
  };

  const previousTrack = () => {
    fetch("https://api.spotify.com/v1/me/player/previous", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    }).catch((err) =>
      console.error("Error al volver a la canción anterior:", err)
    );
  };

  const nextTrack = () => {
    fetch("https://api.spotify.com/v1/me/player/next", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    }).catch((err) =>
      console.error("Error al pasar a la siguiente canción:", err)
    );
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
