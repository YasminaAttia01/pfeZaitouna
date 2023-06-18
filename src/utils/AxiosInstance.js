import axios from "axios";

var axiosInstance;

let generateAxiosInstance = () => {
  axiosInstance = axios.create({
    baseURL: `http://51.77.200.112:6000/api`,
    headers: {
      "Content-Type": "application/json",
    },
  });
  axiosInstance.interceptors.request.use((req) => {
    const token = window.sessionStorage.getItem("token") || "";
    req.headers.Authorization = token;
    return req;
  });
};

export { axiosInstance, generateAxiosInstance };
