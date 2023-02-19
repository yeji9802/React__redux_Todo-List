import { combineReducers } from "redux";
import todoReducer from "./todo/store";
import filterReducer from "./filter/store";
import { createStore } from "redux";

const store = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});

export default createStore(store);
