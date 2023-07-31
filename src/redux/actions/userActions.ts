export const SET_IS_LOGGED = 'SET_IS_LOGGED';

export const setIsAuth = (isAuth: boolean): { type: string; payload: boolean } => {
  return {
    type: SET_IS_LOGGED,
    payload: isAuth,
  };
};
