import axios from "axios";

// 🔹 Obtener dispositivos disponibles
export const getDevices = async (token: string) => {
  try {
    const { data: devicesData } = await axios.get(
      "https://api.spotify.com/v1/me/player/devices",
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    return devicesData.devices.length > 0
      ? {
          id: devicesData.devices[0].id,
          name: devicesData.devices[0].name,
          type: devicesData.devices[0].type,
        }
      : null;
  } catch (error) {
    console.error("Error obteniendo dispositivos disponibles:", error);
    return null;
  }
};
