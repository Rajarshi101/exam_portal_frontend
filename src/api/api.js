import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api", // backend will configure
});

export default api;
