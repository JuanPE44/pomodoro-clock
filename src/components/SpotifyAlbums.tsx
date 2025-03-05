import { useEffect, useState } from "react";
import { getRecommendedAlbums } from "../services/getAlbumsRecomended";

export function SpotifyAlbums({ token }: { token: string }) {
  const [albums, setAlbums] = useState();
  useEffect(() => {
    const fetchAlbums = async () => {
      const data = await getRecommendedAlbums(token);

      setAlbums(data);
    };

    fetchAlbums();
  }, [token]);
  return <div>{token && ""}</div>;
}
