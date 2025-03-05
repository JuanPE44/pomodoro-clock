import { useCallback, useEffect, useState } from "react";
import { getPlayerData } from "../services/getPlayerData";
import { activateDevice } from "../services/activeDevice";
import { getIsPremium } from "../services/getIsPremium";

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
  const [isPremium, setIsPremium] = useState<boolean>(false);

  const fetchDevice = useCallback(async () => {
    const data = await getPlayerData(token);
    const isPremium = await getIsPremium(token);

    if (!isPremium) return;
    if (data) {
      setIsPremium(true);
      setDevice(data.device);
      setTrack({
        name: data.track?.name,
        artist: data.track?.artist,
        cover: data.track?.cover,
      });
      setIsPlaying(data.isPlaying);
    }
  }, [token]);

  const setActiveDevice = async () => {
    if (!token) return;

    if (device) {
      const activatedDevice = await activateDevice(token, deviceId);
      if (activatedDevice) {
        console.log("Dispositivo activado:", activatedDevice);
      } else {
        console.log("No se pudo activar el dispositivo.");
      }
    } else {
      console.log("No se encontraron dispositivos disponibles.");
    }
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

        // Llamar a fetchDevice cuando el player esté listo
        fetchDevice();
      });

      newPlayer.addListener("account_error", ({ message }) => {
        console.error("Error de cuenta:", message);
      });

      newPlayer.on("playback_error", ({ message }) => {
        console.error("Failed to perform playback", message);
      });

      newPlayer.on("authentication_error", ({ message }) => {
        console.error("Failed to authenticate", message);
      });

      newPlayer.on("account_error", ({ message }) => {
        console.error("Failed to validate Spotify account", message);
      });

      setPlayer(newPlayer);
    };

    const intervalId = setInterval(() => {
      fetchDevice();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [token, fetchDevice]); // Aquí dependemos de `fetchDevice`

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
