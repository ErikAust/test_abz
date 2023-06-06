import { actionTypes, getFailAction, getSuccessAction } from "./actions";
import { IInitialState } from "../interfaces";

const initialState: IInitialState = {
  successRegistration: false,
  positions: [],
  users: {
    success: false,
    total_pages: null,
    total_users: null,
    count: null,
    page: null,
    links: {
      next_url: null,
      prev_url: null,
    },
    users: [],
    loading: false,
  },
  error: null,
  isLoading: false,
};

export const rootReducer = (
  state: IInitialState = initialState,
  action: any
) => {
  switch (action.type) {
    case actionTypes.REGISTRATION:
    case actionTypes.GET_POSITIONS:
      return {
        ...state,
        error: null,
        isLoading: true,
        successRegistration: false,
      };
    case actionTypes.GET_USERS:
      return {
        ...state,
        error: null,
        users: { ...state.users, loading: true },
      };
    case actionTypes.SUCCESS:
      return {
        ...state,
        successRegistration: true,
      };
    case getSuccessAction(actionTypes.GET_POSITIONS):
      return {
        ...state,
        positions: action.payload,
        isLoading: false,
      };
    case getSuccessAction(actionTypes.REGISTRATION):
      return {
        ...state,
        isLoading: false,
      };
    case getSuccessAction(actionTypes.GET_USERS):
      return {
        ...state,
        users: { ...action.payload, loading: false },
      };
    case getFailAction(actionTypes.GET_TOKEN):
    case getFailAction(actionTypes.GET_POSITIONS):
    case getFailAction(actionTypes.REGISTRATION):
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case getFailAction(actionTypes.GET_USERS):
      return {
        ...state,
        users: { ...state.users, loading: false },
      };
    default:
      return state;
  }
};
