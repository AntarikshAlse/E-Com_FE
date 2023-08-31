import axios from "axios";

//const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "https://ecomapi-1-m3999497.deta.app/";
const tokenobj = localStorage.getItem("persist:root");
const TokenContainer = tokenobj ? JSON.parse(tokenobj).currentUser : "";
const TOKEN = TokenContainer ? JSON.parse(TokenContainer).accessToken : "";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  // timeout: 1000, // Implement if api keeps in pending
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  // timeout: 1000,
  header: { token: `Bearer ${TOKEN}` },
});
