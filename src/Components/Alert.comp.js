import { Alert, AlertTitle, Snackbar } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { hideAlertMessage } from "../store/Actions/Alert.action";
import { HIDE_ALERT } from "../store/constants";

const AlertComponent = () => {
  const alert = useSelector((state) => state.modal.alert);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(hideAlertMessage());

  return (
    <Snackbar open={alert.show} autoHideDuration={2000} onClose={handleClose}>
      <Alert severity={alert.severity}>
        <AlertTitle>{alert.title}</AlertTitle>
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
