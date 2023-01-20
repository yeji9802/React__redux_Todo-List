import React, { useState } from "react";
import styled from "styled-components";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";

const TodoListItem = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Item>
      {checked ? (
        <MdCheckBox className="check" />
      ) : (
        <MdCheckBoxOutlineBlank className="check" />
      )}
      <TodoText>할 일 추가</TodoText>
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

  .check {
    margin-top: 0.1rem;
    font-size: 1.2rem;
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
