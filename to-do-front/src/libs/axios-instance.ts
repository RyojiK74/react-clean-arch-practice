import axios, { AxiosInstance } from "axios";

const axiosInit = (): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true,
  });

  return axiosInstance;
};

export { axiosInit };
