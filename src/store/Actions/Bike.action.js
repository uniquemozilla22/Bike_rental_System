import { setBikesData } from "../../Database/Bike/Bike.collection";
import { showSuccessMessage } from "./Alert.action";
import ErrorHandle from "./ErrorHandle.action";
import { hideLoading, showLoading } from "./Loading.action";
import { checkUserTypeByID } from "../../Database/Users/User.collection";

export const addBikeData = (data) => {
  return async (dispatch, getState) => {
    console.log(data);
    dispatch(showLoading());
    try {
      const isManager = await checkUserTypeByID(getState().user.token);
      console.log(isManager);
      if (!isManager) throw new Error("Not a Manager ! Login as a Manager");
      const bike = await setBikesData({ ...data });
      console.log(bike.id);
      dispatch(
        showSuccessMessage(
          "Added Bike Success",
          data.name + " has been added successfully"
        )
      );
      dispatch(hideLoading());
      return true;
    } catch (error) {
      ErrorHandle("Add Bike Data Error", error, dispatch);
      return false;
    }
  };
};
