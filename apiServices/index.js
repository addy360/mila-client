import { create } from "apisauce";

const BASE_URL = "http://localhost:8000";

const apiClient = create({ baseURL: BASE_URL });

export const fetchAllPosts = () => {
  return apiClient.get("/");
};
