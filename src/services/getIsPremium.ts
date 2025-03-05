import axios from "axios";

// 🔹 Verificar si el usuario tiene una cuenta Premium
export const getIsPremium = async (token: string): Promise<boolean> => {
  try {
    const { data } = await axios.get("https://api.spotify.com/v1/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log("Tipo de cuenta:", data.product);
    return data.product === "premium";
  } catch (error) {
    console.error("Error verificando cuenta:", error);
    return false; // Si hay error, asumimos que no es premium
  }
};
