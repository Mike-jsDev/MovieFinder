import axios from 'axios';
import { toast } from 'react-toastify';

import { MovieType } from '@interfaces/app/enums';
import { IConfigTypes, IMovie, IMovieDetails } from '@interfaces/app/interfaces';

import { getAllCategorizedMovieApi, getAllDetailsApi, getAllDiscoverMovieApi } from '../api/movies';

import 'react-toastify/dist/ReactToastify.min.css';

export const getCategorizedMovies = async ({ movieType, movieCategory, page }: IConfigTypes): Promise<IMovie[]> => {
  try {
    const response = await getAllCategorizedMovieApi({
      movieType,
      movieCategory,
      page,
    });

    return response.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error;
      toast.error(serverError.message, { autoClose: false });
    }

    return [];
  }
};

export const getMovieDetailsById = async ({
  id,
  movieType,
}: {
  id: number;
  movieType: MovieType;
}): Promise<IMovieDetails | null> => {

  try {
    const response = await getAllDetailsApi({ id, movieType });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error;
      toast.error(serverError.message, { autoClose: false });
    }

    return null;
  }
};

export const getDiscoverMovies = async ({
  movieType,
  page,
}: Omit<IConfigTypes, 'movieCategory'>): Promise<IMovie[]> => {

  try {
    const response = await getAllDiscoverMovieApi({ movieType, page });

    return response.data.results;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error;
      toast.error(serverError.message, { autoClose: false });
    }

    return [];
  }
};
