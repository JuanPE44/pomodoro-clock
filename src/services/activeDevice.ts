import axios from "axios";
import { getDevices } from "./getDevices";

// 🔹 Activar un dispositivo en Spotify
export const activateDevice = async (
  token: string,
  deviceId: string | null
) => {
  if (!deviceId) return null;
  try {
    await axios.put(
      "https://api.spotify.com/v1/me/player/play",
      {
        device_ids: [deviceId], // Solo tu dispositivo principal
        play: true, // Si quieres que empiece a reproducir
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return await getDevices(token);
  } catch (error) {
    console.error("Error activando el player:", error);
    return null;
  }
};
