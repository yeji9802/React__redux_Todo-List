import { Provider } from "react-redux";
import TodoHeader from "./common/TodoHeader";
import TodoInput from "./common/TodoInput";
import TodoList from "./common/TodoList";
import TodoTool from "./common/TodoTool";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <TodoHeader />
      <TodoInput />
      <TodoTool />
      <TodoList />
    </Provider>
  );
}

export default App;
