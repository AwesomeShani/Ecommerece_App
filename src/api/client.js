import { create } from "apisauce";
import cache from "../cache/cache";

const apiClient = create({
  baseURL: "", //BASE URL OF THE BACKEND HERE
});

const get = apiClient.get("").then((response) => {
  if (!response.ok) {
    response.problem;
  }
});
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
