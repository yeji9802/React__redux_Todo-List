import React from "react";
import styled from "styled-components";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";

const TodoListItem = (props) => {
  const { todo } = props;

  return (
    <Item>
      {todo.isCompleted ? (
        <MdCheckBox className="check" />
      ) : (
        <MdCheckBoxOutlineBlank className="check" />
      )}
      <TodoText>{todo.title}</TodoText>
      <ButtonArea>
        <Button>수정</Button>
        <Button>삭제</Button>
      </ButtonArea>
    </Item>
  );
};

export default TodoListItem;
const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e8e8e8;

  .check {
    margin-top: 0.1rem;
    font-size: 1.2rem;
    cursor: pointer;
  }

  &:last-child {
    border: none;
  }

  &:hover {
    background-color: #f5f5f5;
    transition: background-color 0s;
  }

  &:hover Button {
    visibility: visible;
  }
`;

const TodoText = styled.span`
  margin-left: 1rem;
`;

const ButtonArea = styled.div`
  visibility: hidden;
  margin-left: auto;
`;

const Button = styled.button`
  border: 0;
  color: #575757;
  background-color: inherit;
  cursor: pointer;

  &:hover {
    color: #021b79;
    font-weight: bold;
  }
`;
