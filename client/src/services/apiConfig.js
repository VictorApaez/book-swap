import axios from "axios";

const url =
  "https://book-swap-sepia.vercel.app/api" || "http://localhost:5000/api";

const api = axios.create({
  baseURL: url,
});

export default api;
