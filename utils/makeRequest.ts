import axios from "axios";

export const makeRequestApi = axios.create({
    baseURL: process.env.API_REQUEST_URL,
  })