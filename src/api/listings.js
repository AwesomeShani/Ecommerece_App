import client from "../api/client";

const endpoint = "/photos";

const getListings = () => {
  client.get(endpoint);
};

export default {
  getListings,
};
