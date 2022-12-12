import axios from "axios";

//const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "https://17xhzu.deta.dev/";
const TOKEN = JSON.parse(
  JSON.parse(localStorage.getItem("persist:root")).currentUser
).accessToken;
export const publicRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  header: { token: `Bearer ${TOKEN}` },
});
