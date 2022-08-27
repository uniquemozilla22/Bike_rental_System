import { LOGIN, LOGOUT, REHYDRATE_LOGIN } from "../constants";

const initialState = {
  token: null,
  isManager: false,
  logout: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE_LOGIN: {
      return {
        ...state,
        token: action.payload.id,
        isManager: action.payload.isManager,
        logout: action.payload.logout,
      };
    }
    case LOGIN: {
      return {
        ...state,
        token: action.payload.id,
        isManager: action.payload.isManager,
        logout: action.payload.logout,
      };
    }
    case LOGOUT: {
      state.logout();
      return {
        ...state,
        token: null,
        isManager: null,
        logout: null,
      };
    }

    default:
      return state;
  }
};

export default UserReducer;
