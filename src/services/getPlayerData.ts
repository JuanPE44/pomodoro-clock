import axios from "axios";

export const getPlayerData = async (token: string) => {
  try {
    const { data } = await axios.get("https://api.spotify.com/v1/me/player", {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error obteniendo el dispositivo actual:", error);
    return null;
  }
};
