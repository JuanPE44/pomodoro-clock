// 🔹 Activar un dispositivo en Spotify
export const putActiveDevice = async (
  token: string,
  deviceId: string | null,
  setLoading: (loading: boolean) => void,
) => {
  if (!deviceId) return null;

  setLoading(true);

  try {
    await fetch("https://api.spotify.com/v1/me/player", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ device_ids: [deviceId], play: false }),
    });
  } catch (error) {
    console.error("Error activando el player:", error);
  } finally {
    setLoading(false);
  }
};
