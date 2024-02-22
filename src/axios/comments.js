import axios from "axios";
import { authApi } from "./auth";

const url = process.env.REACT_APP_API_URL;
const commentsAxios = axios.create({
  baseURL: `${url}/comments`,
  timeout: 1500,
});

commentsAxios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await authApi.get("/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data) {
        console.log("요청 성공입니다.");
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

commentsAxios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default commentsAxios;
