import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const filter = useSelector((state) => state.filter.filter);

  return (
    <section>
      <List>
        {todos
          .filter((todo) => {
            if (filter === "전체") {
              return true;
            } else if (filter === "진행") {
              return !todo.isCompleted;
            } else if (filter === "완료") {
              return todo.isCompleted;
            }
          })
          .map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
      </List>
    </section>
  );
};

export default TodoList;

const List = styled.ul`
  margin: 2rem auto;
  padding-left: 0;
  width: 50rem;
  list-style: none;
`;
