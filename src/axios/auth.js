import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL;
//바본가바; ㅋㅋ;
export const authApi = axios.create({
  baseURL: url,
  headers: { "Content-Type": "application/json" },
});

authApi.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    const userUrl = await authApi.get(`/user`);
    if (token && userUrl) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // ???????
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
