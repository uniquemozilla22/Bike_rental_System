import { LOGIN } from "../constants";

const initialState = {
  token: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return { ...state, token: action.payload };
    }

    default:
      return state;
  }
};

export default UserReducer;
