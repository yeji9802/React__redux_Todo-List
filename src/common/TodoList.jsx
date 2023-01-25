import React from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const toods = useSelector((state) => state.todos);

  return (
    <section>
      <List>
        {toods.map((todo, idx) => (
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
