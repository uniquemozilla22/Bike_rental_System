import {
  checkUserTypeByID,
  getUserCollection,
} from "../../Database/Users/User.collection";
import { FETCH_USERS_DATA_ALL } from "../constants";
import ErrorHandle from "./ErrorHandle.action";
import { hideLoading, showLoading } from "./Loading.action";

export const GetAllUsers = () => {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    try {
      const isManager = await checkUserTypeByID(getState().user.token);
      if (!isManager) throw new Error("Not a Manager ! Login as a Manager");
      const requestedUsers = await getUserCollection();
      let userData = [];
      requestedUsers.forEach((user) => {
        userData = [...userData, { ...user.data(), id: user.id }];
      });

      dispatch({ type: FETCH_USERS_DATA_ALL });
      dispatch(hideLoading());
      return userData;
    } catch (e) {
      ErrorHandle("Fetch All Users Data Error", e, dispatch);
      return false;
    }
  };
};
