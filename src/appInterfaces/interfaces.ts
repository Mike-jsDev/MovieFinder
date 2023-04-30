export interface Movie {
  id: number;
  title: string;
  name?: string;
  popularity: number;
  release_date: string;
  first_air_date?: string;
  vote_average: number;
  poster_path: string;
}

export interface ConfigTypes {
  movieType: string;
  movieCategory: string;
  page?: number;
}
