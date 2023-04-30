import { FC } from 'react';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Tv from './pages/Tv';

interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<object>;
}

export const routes: Array<Route> = [
  {
    key: 'home-route',
    title: 'Home',
    path: '/',
    enabled: true,
    component: Home,
  },
  {
    key: 'movies-route',
    title: 'Movies',
    path: '/movies',
    enabled: true,
    component: Movies,
  },
  {
    key: 'tv-route',
    title: 'Tv',
    path: '/tv-series',
    enabled: true,
    component: Tv,
  },
];
