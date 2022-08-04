import {
  ERROR_ALERT,
  HIDE_ALERT,
  HIDE_LOADING,
  INFO_ALERT,
  SHOW_LOADING,
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
  loader: false,
};

const ModalReducers = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_ALERT: {
      return { ...state, alert: { show: true, ...action.payload } };
    }
    case ERROR_ALERT: {
      return { ...state, alert: { show: true, ...action.payload } };
    }
    case WARNING_ALERT: {
      return { ...state, alert: { show: true, ...action.payload } };
    }
    case INFO_ALERT: {
      return { ...state, alert: { show: true, ...action.payload } };
    }
    case HIDE_ALERT: {
      return {
        ...state,
        alert: { show: false },
      };
    }
    case SHOW_LOADING: {
      return { ...state, loader: true };
    }
    case HIDE_LOADING: {
      return { ...state, loader: false };
    }
    default:
      return state;
  }
};

export default ModalReducers;
