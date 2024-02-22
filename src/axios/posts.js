import axios from "axios";

const url = process.env.REACT_APP_API_URL;
const postsAxios = axios.create({
  baseURL: `${url}/posts`,
  timeout: 1500,
});

export default postsAxios;
