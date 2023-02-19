import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { todo_add } from "./../redux/todo/action";

const TodoInput = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    // 새로고침 방지
    e.preventDefault();

    // 공란 방지
    if (!text) return;

    const todo = {
      title: text,
      isCompleted: false,
    };

    dispatch(todo_add(todo));

    // 추가 후 값 초기화
    setText("");
    console.log(todo);
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <Input type="text" onChange={handleChangeText} value={text} />
        <Button type="submit">추가</Button>
      </FormContainer>
    </Container>
  );
};

export default TodoInput;

const Container = styled.section`
  display: flex;
  margin: 1rem auto;
  width: 50rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex: 1;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 15px;
  border: 1px solid #021b79;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 15px;
  border: 1px solid #021b79;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  color: #ffffff;
  background-color: #021b79;
  cursor: pointer;
`;
