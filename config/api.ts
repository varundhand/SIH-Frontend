import axios from "axios";

// Axios instance
const axiosInstance = axios.create({
  // Dev url
  baseURL: "http://localhost:8000/api",
  timeout: 600000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

axiosInstance.interceptors.request.use(async function (config: any) {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
    if (token && !config.url.startsWith("/public")) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }
  return config;
});

export default axiosInstance;
