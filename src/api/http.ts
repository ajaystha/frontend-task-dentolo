import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: "http://jsonplaceholder.typicode.com/",
});

export { instance as http };

const responseBody = (response: AxiosResponse) => response.data;

export const fetcher = (url: string) => instance.get(url).then(responseBody);
