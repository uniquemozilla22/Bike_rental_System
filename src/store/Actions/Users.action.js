import {
  checkUserTypeByID,
  getUserCollection,
} from "../../Database/Users/User.collection";
import ErrorHandle from "./ErrorHandle.action";

export const GetAllUsers = () => {
  return async (dispatch, getState) => {
    try {
      const isManager = await checkUserTypeByID(getState().user.token);
      if (!isManager) throw new Error("Not a Manager ! Login as a Manager");
      const requestedUsers = await getUserCollection();
      const data = requestedUsers.map((user) => ({
        ...user.data(),
        id: user.id,
      }));
      console.log(data);
      return data;
    } catch (e) {
      ErrorHandle("Fetch All Users Data Error", e, dispatch);
      return false;
    }
  };
};
