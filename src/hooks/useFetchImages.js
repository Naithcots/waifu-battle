import axios from "axios";
import { useEffect, useState } from "react";

const useFetchImages = (amount) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getSingleImage = async () => {
    try {
      const res = await axios.get("https://api.waifu.pics/sfw/waifu");
      return await res.data;
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(true);
      return null;
    }
  };

  const getImages = async () => {
    let images = [];

    setLoading(true);
    setError(false);

    for (let i = 0; i < amount; i++) {
      const image = await getSingleImage();
      if (!image) return;
      images.push(image);
    }

    setLoading(false);

    return images;
  };

  const setDataState = async () => {
    const images = await getImages();
    if (!images || !images.length) return;
    const data = images.map((image, id) => ({
      id,
      votes: 0,
      rounds: 0,
      pairedWith: [],
      ...image,
    }));
    setData(data);
  };

  useEffect(() => {
    setDataState();
  }, [amount]);

  return { data, loading, error };
};
export default useFetchImages;
