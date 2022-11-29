import axios from "axios";
import useSWR from "swr";

const api = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
  })

export function useFetch(url: string) {

    const { data, error } = useSWR(url, async (url) => {
    const response = await api.get(url);
    const { data } = response;

    return data;
  });

  return { data, error };
}