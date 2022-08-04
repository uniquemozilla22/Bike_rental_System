import {
  checkUser,
  setUserCollection,
} from "../../Database/Users/User.collection";
import { LOGIN } from "../constants";
import { showErrorMessage, showSuccessMessage } from "./Alert.action";
import ErrorHandle from "./ErrorHandle.action";
import { hideLoading, showLoading } from "./Loading.action";

const RegisterUser = (email, password) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const isUser = await checkUser(email);
      if (isUser) throw new Error("User Already Exists");
      const data = await setUserCollection({ email, password });
      dispatch({ type: LOGIN, payload: data.id });
      dispatch(
        showSuccessMessage(
          "Login Success",
          email + " has been logged in Successfully"
        )
      );
      dispatch(hideLoading());

      return data;
    } catch (error) {
      ErrorHandle("Register Error", error, dispatch);
    }
  };
};

export default RegisterUser;
