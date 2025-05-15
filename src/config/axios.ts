import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.PUBLIC_API_BASE_URL,
  headers: {
    common: {
      Accept: "application/json",
    },
    post: {
      "Content-Type": "application/json",
    },
  },
});

export default axiosInstance;
