import React from 'react';
import styled from "styled-components";
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <section>
      <List>
        {
          Array.from({ length: 5 }).map((_, idx) => (
            <TodoListItem key={idx}/>
          ))
        }
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
