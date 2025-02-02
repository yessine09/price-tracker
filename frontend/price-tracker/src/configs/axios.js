import axios from "axios";

const instanceAxios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_DOMAIN,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default instanceAxios;
