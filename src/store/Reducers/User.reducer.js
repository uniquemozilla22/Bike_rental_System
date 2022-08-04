import { LOGIN } from "../constants";

const initialState = {
  token: null,
  isManager: false,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        token: action.payload.id,
        isManager: action.payload.isManager,
      };
    }

    default:
      return state;
  }
};

export default UserReducer;
