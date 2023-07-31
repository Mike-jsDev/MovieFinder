export enum PathType {
  PathHome = '/',
  PathLogin = '/login',
  PathRegister = '/register',
  PathMovies = '/movies',
  PathTv = '/tv-series',
  PathFavorites = '/favorites',
  PathNotFound = '*',
}
export enum RouteKeyType {
  RouteHome = '/',
  RouteLogin = 'login-route',
  RouteRegister = 'register-route',
  RouteMovies = 'movies-route',
  RouteTv = 'tv-route',
  RouteFavorites = 'favorites-route',
  RouteNotFound = 'notFound-route',
  RouteDetails = 'details-route',
}

export enum MovieType {
  Movie = 'movie',
  Tv = 'tv',
}

export enum FormType {
  Login = 'login',
  Register = 'register',
}
