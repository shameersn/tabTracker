import axios from 'axios';
const BASE_URL = "http://localhost:3000/";

export default  () => {
  return axios.create(BASE_URL)
}