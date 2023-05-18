import axios from 'axios';
import { toast } from 'react-toastify';
import { getAllCategorizedMovieApi, getAllDetailsApi, getAllDiscoverMovieApi } from '../api/movies';
import { ConfigTypes, Movie, MovieDetails } from '@interfaces/app/interfaces';
import { MovieType } from '@interfaces/app/enums';
import 'react-toastify/dist/ReactToastify.min.css';

export const getCategorizedMovies = async ({ movieType, movieCategory, page }: ConfigTypes): Promise<Movie[]> => {
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
}): Promise<MovieDetails | null> => {
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

export const getDiscoverMovies = async ({ movieType, page }: Omit<ConfigTypes, 'movieCategory'>): Promise<Movie[]> => {
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
