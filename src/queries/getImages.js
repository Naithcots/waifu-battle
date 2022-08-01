import axios from "axios";

const getImages = () =>
  axios
    .get("https://api.waifu.im/random?many=true&gif=false")
    .then((res) => res.data.images);

export default getImages;
