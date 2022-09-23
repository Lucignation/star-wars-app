import axiosInstance from '../config/axio.config';

//fetches data depending on the url passed to the function
export const getData = async (url: string) => {
  const res = await axiosInstance.get(url);
  return res.data.results;
};


export const setFilm = async (id: string) => {
  const url = `/films/${id}`;
  const res = await axiosInstance.get(url);
  return res.data;
};

export const setPerson = async (id: string) => {
  const url = `/people/${id}`;
  const res = await axiosInstance.get(url);

  return res.data;
};

export const setSpecie = async (id: string) => {
  const url = `/species/${id}`;
  const res = await axiosInstance.get(url);

  return res.data;
};

export const setStarship = async (id: string) => {
  const url = `/starships/${id}`;
  const res: any = await axiosInstance.get(url);

  return res.data;
};
