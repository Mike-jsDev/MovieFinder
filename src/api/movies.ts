import { AxiosResponse } from 'axios';

import { MovieType } from '@interfaces/app/enums';
import { IConfigTypes, IMovie, IMovieDetails } from '@interfaces/app/interfaces';

import { GET } from '../services/HTTPService';

interface AllMovieResponse {
  page: number;
  results: IMovie[];
}

export const getAllCategorizedMovieApi = ({
  movieType,
  movieCategory,
  page = 1,
}: IConfigTypes): Promise<AxiosResponse<AllMovieResponse>> =>
  GET(
    `${process.env.API_URL}/${movieType}/${movieCategory}?api_key=${process.env.API_KEY_3}&language=en-US&page=${page}`,
  );

export const getAllDetailsApi = ({
  id,
  movieType,
}: {
  id: number;
  movieType: MovieType;
}): Promise<AxiosResponse<IMovieDetails>> =>
  GET(
    `${process.env.API_URL}/${movieType}/${id}?api_key=${process.env.API_KEY_3}&append_to_response=casts,videos,images,credits`,
  );

export const getAllDiscoverMovieApi = ({
  sortBy = 'popularity.desc',
  movieType,
  page = 1,
}: Omit<IConfigTypes, 'movieCategory'>): Promise<AxiosResponse<AllMovieResponse>> =>
  GET(
    `${process.env.API_URL}/discover/${movieType}/?api_key=${process.env.API_KEY_3}&language=en-US&sort_by=${sortBy}&include_adult=false&include_video=false&page=${page}`,
  );
