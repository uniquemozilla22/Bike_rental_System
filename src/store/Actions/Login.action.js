import { checkPassword, checkUser } from "../../Database/Users/User.collection";
import { LOGIN, LOGOUT } from "../constants";
import { showSuccessMessage } from "./Alert.action";
import ErrorHandle from "./ErrorHandle.action";
import { hideLoading, showLoading } from "./Loading.action";

const LoginAction = (email, password, setCookie, logout) => {
  console.log("Logged Action");
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const isUser = await checkUser(email);
      if (!isUser) throw new Error("There is no User of that email");

      const { id, isManager } = await checkPassword(email, password);

      if (!id && !isManager)
        throw new Error("Password Incorrect ! Enter a valid password");
      dispatch({ type: LOGIN, payload: { id, isManager, logout } });
      dispatch(
        showSuccessMessage(
          "Login Success",
          email + " has been logged in Successfully"
        )
      );
      setCookie({ id, isManager });
      dispatch(hideLoading());
      return { isLoggedIn: true, isManager };
    } catch (error) {
      ErrorHandle("Login Error !", error, dispatch);
      return false;
    }
  };
};

export const Logout = (goTo) => {
  return (dispatch) => {
    dispatch(showLoading());
    setTimeout(() => {
      dispatch({ type: LOGOUT });
      goTo("/login");
      dispatch(hideLoading());
    }, 3000);
  };
};

export default LoginAction;
