import axios from "axios";
const BASE_URL = "http://localhost:3000/";

export default () => {
  return axios.create({ baseURL: BASE_URL });
};
