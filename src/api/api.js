import axios from "axios";

export const api = axios.create({
  baseURL: "https://genshin.jmp.blue/",
  timeout: 10000,
});
