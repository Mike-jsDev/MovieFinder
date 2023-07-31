import { ReactElement } from 'react';

import { MovieType } from './enums';
export interface IAppRoute {
  key: string;
  title: string;
  path: string;
  enabledToHeader: boolean;
  private: boolean;
  navigateTo?: string;
  component: ReactElement;
}

export interface IMovie {
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

export interface IConfigTypes {
  movieType: MovieType;
  movieCategory: string;
  page?: number;
  sortBy?: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface ICast {
  id: number;
  name: string;
  profile_path: string;
  character: string;
}

export interface IVideosResults {
  id: string;
  key: string;
  name: string;
}

export interface IMovieDetails {
  id: number;
  title: string;
  overview: string;
  genres: IGenre[];
  release_date: string;
  last_air_date: string;
  casts?: {
    cast: ICast[];
  };
  credits?: {
    cast: ICast[];
  };
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  videos: {
    results: IVideosResults[];
  };
}

export interface ICarouselProps {
  config: IConfigTypes;
  sectionTitle: string;
}

export interface IFormAttributes {
  id: string;
  label: string;
  type: string;
  name: string;
  isFullWidth?: boolean;
  value?: string;
}

export interface IFormValues {
  email: string;
  password: string;
  confirmPassword?: string;
}
