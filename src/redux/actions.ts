export const SET_IS_LOADING = 'SET_IS_LOADING';

export const setIsLoading = (isLoading: boolean): { type: string; payload: boolean } => {
  return {
    type: SET_IS_LOADING,
    payload: isLoading,
  };
};
