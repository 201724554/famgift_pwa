import axios from "axios";

export const customAxios = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    withCredentials: true,
});

customAxios.interceptors.request.use(function (config) {
    config.headers.ContentType = "application/json; charset=utf-8";
    return config;
});

customAxios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      alert(error.message);
      return Promise.reject(error);
    }
  );