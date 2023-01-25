import { ADD, DELETE } from "./types";

// action 은 redux 의 state 가 어떻게 변할지 알려주는 인자
let id = 1;

export const todo_add = (todo) => {
  return {
    type: ADD,
    todo: {
      id: id++,
      title: todo.title,
      isCompleted: todo.isCompleted,
    },
  };
};

export const todo_delete = (id) => {
  return {
    type: DELETE,
    id,
  };
};
