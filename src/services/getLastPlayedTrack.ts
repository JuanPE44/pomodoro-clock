import axios from "axios";
import { getDevices } from "./getDevices";
import { putActiveDevice } from "./putActiveDevice";

// 🔹 Obtener la última canción escuchada
export const getLastPlayedTrack = async (
  token: string,
  setIsLoading: (loading: boolean) => void,
) => {
  try {
    const { data } = await axios.get(
      "https://api.spotify.com/v1/me/player/recently-played?limit=1",
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    if (data.items.length === 0) {
      console.log("No se encontró ninguna canción recientemente reproducida.");
      return null;
    }

    const lastTrack = data.items[0].track;

    // Obtener dispositivos disponibles

    const device = await getDevices(token);
    if (device?.name === "Pomodoro Player") {
      await putActiveDevice(token, device?.id, setIsLoading);
    }

    return {
      device: device, // No hay un dispositivo activo
      track: {
        uri: lastTrack.uri,
        name: lastTrack.name,
        artist: lastTrack.artists[0].name,
        cover: lastTrack.album.images[0].url,
      },
      isPlaying: false, // No está en reproducción, es solo el historial
    };
  } catch (error) {
    console.error("Error obteniendo la última canción escuchada:", error);
    return null;
  }
};
