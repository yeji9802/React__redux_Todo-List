import { createStore } from "redux";
import { CHANGEFILTER } from "./types";

const initialState = {
  filter: "전체",
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGEFILTER:
      return { filter: action.filter };

    default:
      return state;
  }
};

export default filterReducer;
