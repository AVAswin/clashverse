import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getPlayer = async (tag) => {
  const response = await api.get(`/player/${tag}`);
  return response.data;
};