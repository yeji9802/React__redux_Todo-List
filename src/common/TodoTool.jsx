import React from 'react';
import styled from 'styled-components';

const TodoTool = () => {
  return (
    <Container>
      <div>
        <Button>전체 완료</Button>
        <Line>|</Line>
        <Button>전체 삭제</Button>
      </div>
      <div>
        <Button>전체</Button>
        <Line>|</Line>
        <Button>진행</Button>
        <Line>|</Line>
        <Button>완료</Button>
      </div>
    </Container>
  );
};

export default TodoTool;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto;
  width: 50rem;
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

const Line = styled.span`
  color: #c0c0c0;
`;