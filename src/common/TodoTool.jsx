import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ALLDELETE } from "./../redux/todo/types";
import { todo_allCompleted, todo_allIncomplete } from "../redux/todo/action";
import { changeFilter } from "./../redux/filter/action";

const TodoTool = () => {
  const todos = useSelector((state) => state.todo.todos);
  const filter = useSelector((state) => state.filter.filter);

  const dispatch = useDispatch();

  const handleClickCompleted = () => {
    dispatch(todo_allCompleted());
  };

  const handleClickIncomplete = () => {
    dispatch(todo_allIncomplete());
  };

  const todoIncomplete = todos.every((todo) => todo.isCompleted);

  const handleAllFilter = () => {
    dispatch(changeFilter("전체"));
  };
  const handleProgress = () => {
    dispatch(changeFilter("진행"));
  };
  const handleCompleted = () => {
    dispatch(changeFilter("완료"));
  };

  console.log(filter);
  return (
    <Container>
      <div>
        {todoIncomplete ? (
          <Button onClick={handleClickIncomplete}>전체 해제</Button>
        ) : (
          <Button onClick={handleClickCompleted}>전체 완료</Button>
        )}
        <Line>|</Line>
        <Button onClick={() => dispatch({ type: ALLDELETE })}>전체 삭제</Button>
      </div>
      <div>
        <Button
          onClick={handleAllFilter}
          className={filter === "전체" ? "" : ""}
        >
          전체
        </Button>
        <Line>|</Line>
        <Button onClick={handleProgress}>진행</Button>
        <Line>|</Line>
        <Button onClick={handleCompleted}>완료</Button>
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
  cursor: pointer;
  background-color: inherit;

  &:hover {
    color: #021b79;
    font-weight: bold;
  }

  .common {
    color: #575757;
  }

  .select {
    background-color: red;

    color: red;
    font-weight: bold;
  }
`;

const Line = styled.span`
  color: #c0c0c0;
`;
