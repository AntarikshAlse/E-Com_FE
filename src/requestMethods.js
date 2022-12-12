import axios from "axios";

//const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "https://17xhzu.deta.dev/api/";
const tokenobj = localStorage.getItem("persist:root");
const TokenContainer = tokenobj ? JSON.parse(tokenobj).currentUser : "";
const TOKEN = TokenContainer ? JSON.parse(TokenContainer).accessToken : "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  header: { token: `Bearer ${TOKEN}` },
});
