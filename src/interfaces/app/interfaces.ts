import { MovieType } from './enums';

export interface Movie {
  id: number;
  title: string;
  name?: string;
  popularity: number;
  release_date: string;
  first_air_date?: string;
  vote_average: number;
  poster_path: string;
  backdrop_path?: string;
}

export interface ConfigTypes {
  movieType: MovieType;
  movieCategory: string;
  page?: number;
  sortBy?: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Cast {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

export interface VideosResults {
  id: string;
  key: string;
  name: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  genres: Genre[];
  release_date: string;
  last_air_date: string;
  casts?: {
    cast: Cast[];
  };
  credits?: {
    cast: Cast[];
  };
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  videos: {
    results: VideosResults[];
  };
}
