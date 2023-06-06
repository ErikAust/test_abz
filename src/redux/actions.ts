export const actionTypes = {
  GET_TOKEN: "GET_TOKEN",
  GET_POSITIONS: "GET_POSITIONS",
  GET_USERS: "GET_USERS",
  REGISTRATION: "REGISTRATION",
  SUCCESS: "SUCCESS",
};

export const getSuccessAction = (actionName: string) => `${actionName}_SUCCESS`;
export const getFailAction = (actionName: string) => `${actionName}_FAIL`;

export const GetPositions = () => ({
  type: actionTypes.GET_POSITIONS,
});

export const GetUsers = () => ({
  type: actionTypes.GET_USERS,
});

export const Registration = () => ({
  type: actionTypes.REGISTRATION,
});

export const SuccessRegistration = () => ({
  type: actionTypes.SUCCESS,
});
