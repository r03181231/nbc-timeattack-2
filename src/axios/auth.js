import axios from "axios";

const url = "https://moneyfulpublicpolicy.co.kr";

export const authApi = axios.create({
  baseURL: url,
});

authApi.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
