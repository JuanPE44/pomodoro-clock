import axios from "axios";

export const getRecommendedAlbums = async (token: string) => {
  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/browse/featured-playlists",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 6,
        },
      },
    );

    const albums = response.data.playlists.items;
    console.log(albums);

    return albums;
  } catch (error) {
    console.error("Error al obtener los álbumes recomendados:", error);
    return [];
  }
};
