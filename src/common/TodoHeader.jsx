import React from "react";
import styled from "styled-components";

const TodoHeader = () => {
  return (
    <Container>
      <Title>TODO LIST</Title>
      <TodoCount>
        <Count>0</Count>개의 할 일
      </TodoCount>
    </Container>
  );
};

export default TodoHeader;

const Container = styled.section`
  width: 50rem;
  margin: 2rem auto;
`;

const Title = styled.h1`
  margin: 0 0 1rem 0;
  color: #021b79;
`;

const Count = styled.mark`
  color: #021b79;
  background-color: initial;
`;

const TodoCount = styled.h3`
  margin: 0;
  color: #575757;
`;
