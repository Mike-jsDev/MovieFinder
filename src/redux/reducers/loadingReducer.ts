import { ILoadingState } from '@interfaces/redux/interfaces';

import { SET_IS_LOADING } from '../actions/loadingAction';

const initialState = {
  isLoading: false,
};

export const loadingReducer = (
  state = { ...initialState },
  action: {
    payload: boolean;
    type: string;
  },
): ILoadingState => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    default:
      return state;
  }
};
