import React, { useState } from "react";
import styled from "styled-components";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  todo_completed,
  todo_incomplete,
  todo_delete,
  todo_update,
} from "../redux/todo/action";

const TodoListItem = (props) => {
  const [text, setText] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const { todo } = props;

  const dispatch = useDispatch();

  const handleCheckedClick = () => {
    if (!todo.isCompleted) {
      dispatch(todo_completed(todo));
    } else {
      dispatch(todo_incomplete(todo));
    }
  };

  const handleUpdate = () => {
    setIsUpdate(true);
    setText(todo.title);
  };

  const handleDelete = () => {
    dispatch(todo_delete(todo.id));
  };

  const handleCompleted = () => {
    dispatch(todo_update(todo, text));
    setText("");

    setIsUpdate(false);
  };

  const handlex = () => {
    setIsUpdate(false);
    setText("");
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <Item>
      {isUpdate ? (
        <>
          <input type="text" value={text} onChange={handleChangeText} />
          <ButtonArea>
            <Button onClick={handleCompleted}>완료</Button>
            <Button onClick={handlex}>취소</Button>
          </ButtonArea>
        </>
      ) : (
        <>
          <MdCheckBoxOutlineBlank
            className={`check ${todo.isCompleted ? "isCompleted" : ""}`}
            onClick={handleCheckedClick}
          />

          <TodoText>{todo.title}</TodoText>
          <ButtonArea>
            <Button onClick={handleUpdate}>수정</Button>
            <Button onClick={handleDelete}>삭제</Button>
          </ButtonArea>
        </>
      )}
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

  .isCompleted {
    background-color: red;
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
