import { LoadingState } from '@interfaces/redux/interfaces';
import { SET_IS_LOADING } from './actions';

const initialState = {
  isLoading: true,
};

const rootReducer = (
  state = { ...initialState },
  action: {
    payload: boolean;
    type: string;
  },
): LoadingState => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return { ...state, isLoading: action.payload };
    }

    default:
      return state;
  }
};

export default rootReducer;
