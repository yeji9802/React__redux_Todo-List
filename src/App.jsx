import Divider from "./common/Divider";
import TodoHeader from "./common/TodoHeader";
import TodoInput from "./common/TodoInput";
import TodoList from "./common/TodoList";
import TodoTool from "./common/TodoTool";

function App() {

  return (
    <div>
      <TodoHeader />
      <TodoInput />
      <TodoTool />
      <Divider />
      <TodoList />
    </div>
  );
}

export default App;
