import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showWarningMessage } from "../store/Actions/Alert.action";

const ManagerAuthLayout = (props) => {
  const isManager = useSelector((state) => state.user.isManager);
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const notAManager = useCallback(() => {
    if (!isManager) {
      navigation(-1);
      dispatch(
        showWarningMessage(
          "Not A Manager",
          "You must be logged in as a Manager to access this page"
        )
      );
    }
  }, [dispatch, isManager, navigation]);

  useEffect(() => notAManager, [notAManager]);

  return props.children;
};

export default ManagerAuthLayout;
