import { HIDE_LOADING, SHOW_LOADING } from "../constants";

export const showLoading = () => {
  return (dispatch) => dispatch({ type: SHOW_LOADING });
};
export const hideLoading = () => {
  return (dispatch) => dispatch({ type: HIDE_LOADING });
};
