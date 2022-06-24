import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./login.types";

let token = JSON.parse(localStorage.getItem("token"));
const initialState = {
  isLoading: false,
  isError: false,
  isAuth:  false,
  token: token,
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem("token",JSON.stringify(payload.token))
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: payload.token,
        isAuth: true,
      };
    }
    case LOGIN_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
