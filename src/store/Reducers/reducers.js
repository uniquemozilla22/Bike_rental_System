import { combineReducers } from "redux";
import ModalReducers from "./Modal.reducer";
import UserReducer from "./User.reducer";

const reducer = combineReducers({
  user: UserReducer,
  modal: ModalReducers,
});

export default reducer;
