import axios from "axios";

const instance = axios.create({
  baseURL: " https://api.unsplash.com",
  params: {
    client_id:
      "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9",
  },
});

export const getRandomImgs = async () => {
  const { data } = await instance.get(`/photos`, {
    params: {
      per_page: 20,
      order_by: "popular",
    },
  });
  return data;
};

export const getImgById = async (id) => {
  const { data } = await instance.get(`/photos/${id}`);
  return data;
};

export const getImgByQwery = async (query, page = 1) => {
  const { data } = await instance.get(`/search/photos`, {
    params: {
      per_page: 20,
      query,
      page,
    },
  });
  return data;
};
