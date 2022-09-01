import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showWarningMessage } from "../store/Actions/Alert.action";

const LoggedInAuthLayout = (props) => {
  const { token: isLoggedIn } = useSelector((state) => state.user);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const notLogedIn = useCallback(() => {
    if (!isLoggedIn) {
      dispatch(
        showWarningMessage(
          "Not Logged In",
          "You must be logged in to access this page"
        )
      );
      navigation("/login");
    }
  }, [dispatch, isLoggedIn, navigation]);

  useEffect(() => notLogedIn, [notLogedIn]);

  return props.children;
};

export default LoggedInAuthLayout;
