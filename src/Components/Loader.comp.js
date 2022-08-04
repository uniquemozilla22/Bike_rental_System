import { LinearProgress, Modal } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading } from "../store/Actions/Loading.action";

const LoaderComponent = () => {
  const loader = useSelector((state) => state.modal.loader);
  const dispatch = useDispatch();

  const handleClose = () => dispatch(hideLoading());
  return (
    <Modal open={loader} onClose={handleClose}>
      <LinearProgress />
    </Modal>
  );
};

export default LoaderComponent;
