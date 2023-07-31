import { PathType, RouteKeyType } from '@interfaces/app/enums';
import { IAppRoute } from '@interfaces/app/interfaces';
import { DetailsPage } from '@pages/DetailsPage';
import { FavoritesPage } from '@pages/FavoritesPage';
import { LoginPage } from '@pages/LoginPage';
import { MoviePage } from '@pages/MoviePage';
import { NotFoundPage } from '@pages/NotFoundPage';
import { RegisterPage } from '@pages/RegisterPage';

export const appRoutes: Array<IAppRoute> = [
  {
    key: RouteKeyType.RouteDetails,
    title: 'Details Page',
    path: ':movieType/:id',
    enabledToHeader: false,
    private: false,
    component: <DetailsPage />,
  },
  {
    key: RouteKeyType.RouteMovies,
    title: 'Movies',
    path: PathType.PathMovies,
    enabledToHeader: true,
    private: false,
    component: <MoviePage />,
  },
  {
    key: RouteKeyType.RouteTv,
    title: 'Tv Series',
    path: PathType.PathTv,
    enabledToHeader: true,
    private: false,
    component: <MoviePage />,
  },
  {
    key: RouteKeyType.RouteRegister,
    title: 'Register',
    path: PathType.PathRegister,
    enabledToHeader: false,
    private: false,
    navigateTo: PathType.PathHome,
    component: <RegisterPage />,
  },
  {
    key: RouteKeyType.RouteLogin,
    title: 'LogIn',
    path: PathType.PathLogin,
    enabledToHeader: false,
    private: false,
    navigateTo: PathType.PathHome,
    component: <LoginPage />,
  },
  {
    key: RouteKeyType.RouteFavorites,
    title: 'Favorites',
    path: PathType.PathFavorites,
    enabledToHeader: false,
    private: true,
    component: <FavoritesPage />,
  },
  {
    key: RouteKeyType.RouteNotFound,
    title: 'NotFound Page',
    path: PathType.PathNotFound,
    enabledToHeader: false,
    private: false,
    component: <NotFoundPage />,
  },
];
