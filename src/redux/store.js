import { createStore } from "redux";
import { ADD, DELETE, AllDELETE } from "./types";

// 초기 상태
const initialState = {
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
      break;
    case DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
      break;
    case "todoAllDelete":
      return {
        todos: [],
      };
      break;

    default:
      break;
  }
  return state;
};

export const store = createStore(reducer);
