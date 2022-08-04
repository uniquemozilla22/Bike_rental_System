import { Alert, AlertTitle, Snackbar } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HIDE_ALERT } from "../store/constants";

const AlertComponent = () => {
  const alert = useSelector((state) => state.modal.alert);
  const dispatch = useDispatch();
  const handleClose = () => dispatch({ type: HIDE_ALERT });

  return (
    <Snackbar open={alert.show} autoHideDuration={2000} onClose={handleClose}>
      <Alert severity={alert.severity}>
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
