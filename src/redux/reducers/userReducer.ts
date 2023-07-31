import { IUserState } from '@interfaces/redux/interfaces';

import { SET_IS_LOGGED } from '../actions/userActions';

const initialState = {
  isAuth: false,
};

export const userReducer = (
  state = { ...initialState },
  action: {
    payload: boolean;
    type: string;
  },
): IUserState => {
  switch (action.type) {
    case SET_IS_LOGGED: {
      return {
        ...state,
        isAuth: action.payload,
      };
    }

    default:
      return state;
  }
};
