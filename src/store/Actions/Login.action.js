import { checkPassword, checkUser } from "../../Database/Users/User.collection";
import { LOGIN } from "../constants";
import { showSuccessMessage } from "./Alert.action";
import ErrorHandle from "./ErrorHandle.action";
import { hideLoading, showLoading } from "./Loading.action";

const LoginAction = (email, password) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const isUser = await checkUser(email);
      if (!isUser) throw new Error("There is no User of that email");

      const id = await checkPassword(email, password);
      dispatch({ type: LOGIN, payload: id });
      dispatch(
        showSuccessMessage(
          "Login Success",
          email + " has been logged in Successfully"
        )
      );
      dispatch(hideLoading());
      return true;
    } catch (error) {
      ErrorHandle("Login Error !", error, dispatch);
      return false;
    }
  };
};

export default LoginAction;
