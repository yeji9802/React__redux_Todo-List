import { createStore } from "redux";
import {
  ADD,
  DELETE,
  ALLDELETE,
  COMPLETED,
  INCOMPLETE,
  ALLCOMPLETED,
  ALLINCOMPLETE,
  UPDATE,
} from "./types";

// 초기 상태
const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        todos: [...state.todos, action.todo],
      };
    case DELETE:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    case ALLDELETE:
      return {
        todos: [],
      };
    case COMPLETED:
      const copyCompleted = [...state.todos];
      const todoCompletedIndex = copyCompleted.findIndex(
        (todo) => todo.id === action.todo.id
      );
      copyCompleted.splice(todoCompletedIndex, 1, action.todo);

      return {
        todos: copyCompleted,
      };

    case INCOMPLETE:
      const copyIncomplete = [...state.todos];
      const todoIncompleteIndex = copyIncomplete.findIndex(
        (todo) => todo.id === action.todo.id
      );
      copyIncomplete.splice(todoIncompleteIndex, 1, action.todo);

      return {
        todos: copyIncomplete,
      };

    case ALLCOMPLETED:
      return {
        todos: state.todos.map((todo) => {
          return { ...todo, isCompleted: true };
        }),
      };

    case ALLINCOMPLETE:
      return {
        todos: state.todos.map((todo) => {
          return { ...todo, isCompleted: false };
        }),
      };

    case UPDATE:
      const copyUpdate = [...state.todos];
      const todoUpdateIndex = copyUpdate.findIndex(
        (todo) => todo.id === action.todo.id
      );
      copyUpdate.splice(todoUpdateIndex, 1, action.todo);

      return {
        todos: copyUpdate,
      };

    default:
      break;
  }
  return state;
};

export default todoReducer;
