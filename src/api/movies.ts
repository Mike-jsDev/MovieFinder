import { AxiosResponse } from 'axios';
import { GET } from '../services/HTTPService';
import { ConfigTypes, Movie } from 'appInterfaces/interfaces';

interface Response {
  page: number;
  results: Movie[];
}

export const getAllMovieApi = ({
  movieType,
  movieCategory,
  page = 1,
}: ConfigTypes): Promise<AxiosResponse<Response>> =>
  GET(
    `${process.env.API_URL}/${movieType}/${movieCategory}?api_key=${process.env.API_KEY_3}&language=en-US&page=${page}`,
  );
