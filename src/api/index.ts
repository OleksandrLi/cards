import axios from "axios";

const { REACT_APP_API_URL } = process.env;

export const api = axios.create({
  baseURL: REACT_APP_API_URL,
  validateStatus: (status) => status >= 200 && status < 300,
});

api.interceptors.request.use(
  (request) => {
    if (request.headers) {
      request.headers["Content-Type"] = "application/json";
    }
    return request;
  },
  (error) => error
);
