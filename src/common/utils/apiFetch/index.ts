import axios, { AxiosResponse } from "axios";
import { IFetch } from "../../interfaces/fetcher";

const headers = {
  "Content-Type": "application/json",
};

const axiosInstance = axios.create({
  headers,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    throw error;
  }
);

const apiFetcher = async <S = any>(
  options: IFetch
): Promise<AxiosResponse<S>> => {
  const { url, method = "GET", headers, data } = options;

  const requestBody = {
    url,
    method,
    headers: {
      ...headers,
    },
    data,
  };

  return await axiosInstance.request(requestBody);
};

export default apiFetcher;
