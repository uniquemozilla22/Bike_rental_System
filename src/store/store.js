import { createStore } from "redux";
import reducer from "./Reducers/reducers";

const store = createStore(reducer);

export default store;
