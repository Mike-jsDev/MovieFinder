export interface ILoadingState {
  isLoading: boolean;
}
export interface IUserState {
  isAuth: boolean;
}

export interface IRootState {
  loadingReducer: ILoadingState;
  userReducer: IUserState;
}
