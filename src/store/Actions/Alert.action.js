import {
  ERROR_ALERT,
  HIDE_ALERT,
  INFO_ALERT,
  SUCCESS_ALERT,
  WARNING_ALERT,
} from "../constants";

export const showSuccessMessage = (title, message) => {
  return (dispatch) =>
    dispatch({ type: SUCCESS_ALERT, payload: { title, message } });
};

export const showErrorMessage = (title, message) => {
  return (dispatch) =>
    dispatch({ type: ERROR_ALERT, payload: { title, message } });
};
export const showWarningMessage = (title, message) => {
  return (dispatch) =>
    dispatch({ type: WARNING_ALERT, payload: { title, message } });
};
export const showInfoMessage = (title, message) => {
  return (dispatch) =>
    dispatch({ type: INFO_ALERT, payload: { title, message } });
};

export const hideAlertMessage = () => {
  return (dispatch) => dispatch({ type: HIDE_ALERT });
};
