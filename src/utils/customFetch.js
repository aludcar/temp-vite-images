import axios from "axios";

const KeyAccess = "IYOyfrpnUgu8YzFTuJ_SZgEHs0nK-v6p0a-Kc3-Zb3M";

const CustomFetch = axios.create({
  baseURL: "https://api.unsplash.com/photos",
});

export default CustomFetch;
