import { showErrorMessage } from "./Alert.action";

const ErrorHandle = (title, error, dispatch) => {
  console.log({ ...error });
  dispatch(showErrorMessage(title, error.message));
  return null;
};

export default ErrorHandle;
