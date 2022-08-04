import {
  ERROR_ALERT,
  HIDE_ALERT,
  INFO_ALERT,
  SUCCESS_ALERT,
  WARNING_ALERT,
} from "../constants";

const initialState = {
  alert: {
    severity: null,
    show: false,
    title: null,
    message: null,
  },
};

const ModalReducers = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_ALERT: {
      return { ...state, alert: { severity: "success", show: true } };
    }
    case ERROR_ALERT: {
      return { ...state, alert: { severity: "danger", show: true } };
    }
    case WARNING_ALERT: {
      return { ...state, alert: { severity: "warning", show: true } };
    }
    case INFO_ALERT: {
      return { ...state, alert: { severity: "info", show: true } };
    }
    case HIDE_ALERT: {
      return { ...state, alert: { severity: null, show: false } };
    }
    default:
      return state;
  }
};

export default ModalReducers;
