import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create();

export const GET = async <T = never>(url: string): Promise<AxiosResponse<T>> => {
  const response = await axiosInstance.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'identity',
    },
  });

  return response;
};
