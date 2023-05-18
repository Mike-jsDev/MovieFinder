import { FC } from 'react';
import { MoviePage } from '@pages/MoviePage';
import { DetailsPage } from '@pages/DetailsPage';

interface Route {
  key: string;
  title: string;
  path: string;
  enabledToHeader: boolean;
  component: FC<object>;
}

export const routes: Array<Route> = [
  {
    key: 'details-page-route',
    title: 'Details Page',
    path: ':movieType/:id',
    enabledToHeader: false,
    component: DetailsPage,
  },
  {
    key: 'movies-route',
    title: 'Movies',
    path: 'movies',
    enabledToHeader: true,
    component: MoviePage,
  },
  {
    key: 'tv-route',
    title: 'Tv Series',
    path: 'tv-series',
    enabledToHeader: true,
    component: MoviePage,
  },
];
