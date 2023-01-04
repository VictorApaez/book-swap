import axios from "axios";

const api = axios.create({
  baseURL: "https://bookswap.up.railway.app/api",
});

export default api;
