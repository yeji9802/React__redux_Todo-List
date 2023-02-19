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

export const todo_allDelete = () => {
  return {
    type: ALLDELETE,
    todo: [],
  };
};

export const todo_completed = (todo) => {
  return {
    type: COMPLETED,
    todo: { ...todo, isCompleted: true },
  };
};

export const todo_incomplete = (todo) => {
  return {
    type: INCOMPLETE,
    todo: { ...todo, isCompleted: false },
  };
};

export const todo_allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const todo_allIncomplete = () => {
  return {
    type: ALLINCOMPLETE,
  };
};

export const todo_update = (todo, title) => {
  return {
    type: UPDATE,
    todo: { ...todo, title },
  };
};
