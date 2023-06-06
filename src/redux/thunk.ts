import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { API_URL } from "../utils/helpers";
import { IUserRegistration } from "../interfaces";
import {
  actionTypes,
  getFailAction,
  getSuccessAction,
  GetPositions,
  Registration,
  SuccessRegistration,
  GetUsers,
} from "./actions";

export const thunkGetToken = () => {
  return async (dispatch: Dispatch) => {
    await axios
      .get(`${API_URL}/token`)
      .then((response: AxiosResponse) => {
        localStorage.setItem("token", response.data.token);
      })
      .catch((error: any) => {
        dispatch({
          type: getFailAction(actionTypes.GET_TOKEN),
          payload: error.message,
        });
      });
  };
};

export const thunkGetPositions = () => {
  return async (dispatch: Dispatch) => {
    dispatch(GetPositions());

    await axios
      .get(`${API_URL}/positions`)
      .then((response: AxiosResponse) => {
        dispatch({
          type: getSuccessAction(actionTypes.GET_POSITIONS),
          payload: response.data.positions,
        });
      })
      .catch((error: any) => {
        dispatch({
          type: getFailAction(actionTypes.GET_POSITIONS),
          payload: error.message,
        });
      });
  };
};

export const thunkGetUsers = (link?: string | null) => {
  return async (dispatch: Dispatch) => {
    dispatch(GetUsers());

    axios
      .get(link ? link : `${API_URL}/users?page=1&count=6`, {
        headers: { Token: localStorage.getItem("token") },
      })
      .then((response: AxiosResponse) => {
        dispatch({
          type: getSuccessAction(actionTypes.GET_USERS),
          payload: response.data,
        });
      })
      .catch((error: any) => {
        dispatch({
          type: getFailAction(actionTypes.GET_USERS),
          payload: error.message,
        });
      });
  };
};

export const thunkUserRegistration = (
  userData: IUserRegistration,
  reset: () => void
) => {
  return async (dispatch: Dispatch) => {
    dispatch(Registration());

    await axios
      .post(`${API_URL}/users`, userData, {
        headers: {
          Token: localStorage.getItem("token"),
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response: AxiosResponse) => {
        dispatch({
          type: getSuccessAction(actionTypes.REGISTRATION),
        });
        reset();
        dispatch(SuccessRegistration());

        axios
          .get(`${API_URL}/users?page=1&count=6`, {
            headers: { Token: localStorage.getItem("token") },
          })
          .then((response: AxiosResponse) => {
            dispatch({
              type: getSuccessAction(actionTypes.GET_USERS),
              payload: response.data,
            });
          });
      })
      .catch((error: any) => {
        dispatch({
          type: getFailAction(actionTypes.REGISTRATION),
          payload: error.response.data.message,
        });
      });
  };
};
