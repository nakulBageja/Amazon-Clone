import axios from "axios";

const instance = axios.create({
  baseURL: "..." //The API (cloud functon ) URL
});

export default instance;
