import axios from "axios";
import { getLastPlayedTrack } from "./getLastPlayedTrack";

export const getPlayerData = async (
  token: string,
  setLoading: (loading: boolean) => void
) => {
  try {
    const { data } = await axios.get("https://api.spotify.com/v1/me/player", {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!data) {
      console.log("No hay información del reproductor disponible.");
      return getLastPlayedTrack(token, setLoading);
    }

    return {
      device: data.device,
      track: {
        uri: data.item.uri,
        name: data.item.name,
        artist: data.item.artists[0].name,
        cover: data.item.album.images[0].url,
      },
      isPlaying: data.is_playing,
    };
  } catch (error) {
    console.error("Error obteniendo el dispositivo actual:", error);
    return null;
  }
};
