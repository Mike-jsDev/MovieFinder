import { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { getAllMovieApi } from '../api/movies';
import { ConfigTypes, Movie } from '../appInterfaces/interfaces';
import 'react-toastify/dist/ReactToastify.min.css';

export const getMovies = async ({
  movieType,
  movieCategory,
  page,
}: ConfigTypes): Promise<Movie[]> => {
  try {
    const response = await getAllMovieApi({ movieType, movieCategory, page });

    return response.data.results;
  } catch (err: unknown) {
    const error = err as AxiosError;
    toast.error(error.message, { autoClose: false });

    return [];
  }
};
