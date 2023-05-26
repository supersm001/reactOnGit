export const SetLogin = "SetLogin";
export const SetUsername = "SetUsername";
export const SetEmail = "SetEmail";
export const SetPassword = "SetPassword";

export const setLogin = (val) => (dispatch) => {
  dispatch({
    type: SetLogin,
    payload: val,
  });
};

export const setUsername = (val) => (dispatch) => {
  dispatch({
    type: SetUsername,
    payload: val,
  });
};

export const setEmail = (val) => (dispatch) => {
  dispatch({
    type: SetEmail,
    payload: val,
  });
};

export const setPassword = (val) => (dispatch) => {
  dispatch({
    type: SetPassword,
    payload: val,
  });
};
