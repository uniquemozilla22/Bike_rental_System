import { showErrorMessage } from "./Alert.action";
import { hideLoading } from "./Loading.action";

const ErrorHandle = (title, error, dispatch) => {
  console.log({ ...error });
  dispatch(showErrorMessage(title, error.message));
  dispatch(hideLoading());
  return null;
};

export default ErrorHandle;
