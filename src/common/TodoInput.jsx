import React from "react";
import styled from "styled-components";

const TodoInput = () => {
  return (
    <Container>
      <FormContainer>
        <Input type="text" />
        <Button>추가</Button>
      </FormContainer>
    </Container>
  );
};

export default TodoInput;

const Container = styled.section`
  display: flex;
  margin: 2rem auto;
  width: 50rem;
`;

const FormContainer = styled.form`
  display: flex;
  flex: 1;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 20px;
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
