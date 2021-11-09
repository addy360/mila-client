import { create } from "apisauce";

const BASE_URL = "https://milaapi.herokuapp.com";

const apiClient = create({ baseURL: BASE_URL });

export const fetchAllPosts = (url = "/") => {
  return apiClient.get(url);
};

export const fetchDetailedPost = (endpoint) => {
  return apiClient.get(endpoint);
};
