import { combineReducers } from "redux";
import UserReducer from "./User.reducer";

const reducer = combineReducers({
  user: UserReducer,
});

export default reducer;
