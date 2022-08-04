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

      const { id, isManager } = await checkPassword(email, password);
      dispatch({ type: LOGIN, payload: { id, isManager } });
      dispatch(
        showSuccessMessage(
          "Login Success",
          email + " has been logged in Successfully"
        )
      );
      dispatch(hideLoading());
      return { isLoggedIn: true, isManager };
    } catch (error) {
      ErrorHandle("Login Error !", error, dispatch);
      return false;
    }
  };
};

export default LoginAction;
