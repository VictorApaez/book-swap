import axios from "axios";

const url =
  "https://bookswap.up.railway.app/api" || "http://localhost:5000/api";

const api = axios.create({
  baseURL: url,
});

export default api;
