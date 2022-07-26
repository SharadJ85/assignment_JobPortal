import axios from "axios";

const server = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000,
});

export default server;
