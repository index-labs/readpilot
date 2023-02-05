import { READ_PILOT_TOKEN } from "@/lib/constants";
import axios, { AxiosError } from "axios";

export const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://127.0.0.1:8000/"
      : "https://api.pipe3.xyz/",

  timeout: 5000,
});

instance.interceptors.request.use((req) => {
  if (req.url !== "/api/v1/readpilot/google/login") {
    !req.headers && (req.headers = {} as any);
    req.headers.Authorization =
      `Bearer ${localStorage.getItem(READ_PILOT_TOKEN)}` || "";
  }
  return req;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<any, any>) => {
    if (error && error.response) {
      const status = error.response.status;
      if (status === 401) {
        localStorage.removeItem(READ_PILOT_TOKEN);
        window.location.reload();
      } else {
      }
    }
    return Promise.reject(error);
  },
);

// ================================== User ================================

// Get User Info
export const getUserInfo = (params: any) =>
  instance.get("/api/v1/readpilot/google/info", { params });

// Google Login
export const googleLogin = (params: any) =>
  instance.post("/api/v1/readpilot/google/login", params);
